import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';
import { Betankung } from '../models/betankung';

@Injectable({
  providedIn: 'root'
})

export class BetankungService {
  // data
  private _betankungen = new BehaviorSubject<Betankung[]>([])
  readonly betankungen = this._betankungen.asObservable()
  
  // dataStore
  private dataStore: { betankungen: Betankung[] } = { betankungen: [] }

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
}

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  get _dataStore() {
    return this.dataStore
  }

  reducer(action: string, data: any): Observable<any> {
    console.info(`reducer | action: '${action}', data: ${data}`)
    const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
    let param = ``
    switch (action) {

        case 'updateBetankung': {
            param = `id=${data.id}&id_schiff=${data.id_schiff}&latitude=${data.latitude}&longitude=${data.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfilllingquantity}`
            break
        }
        case 'deleteBetankung': {
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
        case 'getBetankungen':
            param = `?id_schiff=1&all=true`
            break

        default:
            break
    }

    return this.httpClient.get(baseURL + param, { headers: { 'Authorization': 'Bearer ' + this.authService.tokenValue } }).pipe(retry(2),take(1))
  }
  
  getBetankungen() {
    const source$ = this.getReducer('getBetankungen', {})
    source$.subscribe((data: any) => {
      console.log(data)
        this.dataStore.betankungen = data
        this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    })
  }
  createBetankung(betankung: Betankung) {

  }
  updateBetankung(betankung: Betankung) {
    console.log(betankung)
    this.reducer('updateBetankung', betankung).subscribe(success => {
      this.dataStore.betankungen = this.dataStore.betankungen.filter(el => el.id != betankung.id)
      this.dataStore.betankungen.push(betankung)
      this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    })
  }
  deleteBetankung(id: string) {
    console.log(id)
    this.reducer('deleteBetankung', id).subscribe(success => {
      this.dataStore.betankungen = this.dataStore.betankungen.filter(el => el.id != id)
      this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    })
  }
}
