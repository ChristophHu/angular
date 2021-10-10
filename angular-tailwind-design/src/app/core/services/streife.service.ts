import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';
import { Streife } from '../models/streife';

@Injectable({
  providedIn: 'root'
})
export class StreifeService {
  // data
  private _streifen = new BehaviorSubject<Streife[]>([])
  readonly streifen = this._streifen.asObservable()
  
  // dataStore
  private dataStore: { streifen: Streife[] } = { streifen: [] }

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  get _dataStore() {
    return this.dataStore
  }

  reducer(action: string, data: any): Observable<any> {
    console.info(`reducer | action: '${action}', data: ${data}`)
    const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
    let param = ``
    switch (action) {

        case 'updateStreife': {
            param = `id=${data.id}&id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&ende=${data.ende}&kennung=${data.kennung}`
            break
        }
        case 'deleteStreife': {
            param = `id=${data}`
            break
        }

        default:
            console.error('There is no action to switch.')
            break
    }
    
    return this.httpClient.post(
        baseURL, 
        param, { 
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Authorization': 'Bearer ' + this.authService.tokenValue 
            }
        })
        .pipe(retry(2), take(1))
}

  getReducer(action: string, data: any): any {
    console.info(`getreducer | action: '${action}', data: ${data}`)
    const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
    let param = ``
    switch (action) {
        case 'getStreifen':
            param = ``
            break

        default:
            break
    }

    return this.httpClient.get(baseURL + param, { headers: { 'Authorization': 'Bearer ' + this.authService.tokenValue } }).pipe(retry(2),take(1))
  }

  getStreifen() {
    const source$ = this.getReducer('getStreifen', {})
    source$.subscribe((data: any) => {
      console.log(data)
        this.dataStore.streifen = data
        this._streifen.next(Object.assign({}, this.dataStore).streifen)
    })
  }

  updateStreife(streife: Streife) {
    console.log(streife)
    this.reducer('updateStreife', streife).subscribe(success => {
      this.dataStore.streifen = this.dataStore.streifen.filter(el => el.id != streife.id)
      this.dataStore.streifen.push(streife)
      this._streifen.next(Object.assign({}, this.dataStore).streifen)
    })
  }
  deleteStreife(id: string) {
    this.reducer('deleteStreife', id).subscribe(success => {
      this.dataStore.streifen = this.dataStore.streifen.filter(el => el.id != id)
      this._streifen.next(Object.assign({}, this.dataStore).streifen)
    })
  }
}
