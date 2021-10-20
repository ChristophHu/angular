import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';
import { Schiff } from '../models/schiff';
import { Zaehlerstand } from '../models/zaehlerstand';
import { Zaehlerstandstyp } from '../models/zaehlerstandstyp';

@Injectable({
  providedIn: 'root'
})
export class ZaehlerstaendeService {
  // data zaehlerstaende
  private _zaehlerstande = new BehaviorSubject<Zaehlerstand[]>([])
  readonly zaehlerstande = this._zaehlerstande.asObservable()
  
  // data zaehlerstandstypen
  private _zaehlerstandstypen = new BehaviorSubject<Zaehlerstandstyp[]>([])
  readonly zaehlerstandstypen = this._zaehlerstandstypen.asObservable()

  // data schiffe
  private _schiffe = new BehaviorSubject<Schiff[]>([])
  readonly schiffe = this._schiffe.asObservable()

  // dataStore
  private dataStore: { zaehlerstande: Zaehlerstand[], zaehlerstandstypen: Zaehlerstandstyp[], schiffe: Schiff[] } = { zaehlerstande: [], zaehlerstandstypen: [], schiffe: [] }

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  get _dataStore() {
    return this.dataStore
  }

  reducer(action: string, data: any): Observable<any> {
    console.info(`reducer | action: '${action}', data: `, data)
    const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
    let param = ``
    switch (action) {

      case 'insertZaehlerstand':
        param: `id_schiff=${data.id_schiff}&id_zaehlerstandstyp=${data.zaehlerstandstyp}&value=${data.value}&date=${data.date}`
        break

      case 'updateZaehlerstand': {
          param = `id=${data.id}&id_schiff=${data.id_schiff}&value=${data.value}&date=${data.date}`
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
      case 'getSchiffe':
      case 'getZaehlerstandstypen':
        param = ``
        break

      case 'getZaehlerstaendeAll':
          param = `?all=false`
          break

      case 'getZaehlerstaende':
          param = `?id_schiff=1`
          break

      default:
          break
    }

    return this.httpClient.get(baseURL + param, { headers: { 'Authorization': 'Bearer ' + this.authService.tokenValue } }).pipe(retry(2),take(1))
  }

  getSchiffe() {
    const source$ = this.getReducer('getSchiffe', {})
    source$.subscribe((data: any) => {
      console.log(data)
      this.dataStore.schiffe = data
      this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
    })
  }
  getZaehlerstaende() {
    const source$ = this.getReducer('getZaehlerstaendeAll', {})
    source$.subscribe((data: any) => {
      console.log(data)
      this.dataStore.zaehlerstande = data
      this._zaehlerstande.next(Object.assign({}, this.dataStore).zaehlerstande)
    })
  }
  getZaehlerstandstypen() {
    const source$ = this.getReducer('getZaehlerstandstypen', {})
    source$.subscribe((data: any) => {
      console.log(data)
      this.dataStore.zaehlerstandstypen = data
      this._zaehlerstandstypen.next(Object.assign({}, this.dataStore).zaehlerstandstypen)
    })
  }
  insertZaehlerstand(zaehlerstand: Zaehlerstand) {
    console.log(zaehlerstand)
    this.reducer('insertZaehlerstand', zaehlerstand).subscribe(success => {
      this.dataStore.zaehlerstande = this.dataStore.zaehlerstande.filter(el => el.id != zaehlerstand.id)
      this.dataStore.zaehlerstande.push(zaehlerstand)
      this._zaehlerstande.next(Object.assign({}, this.dataStore).zaehlerstande)
    })
  }
  updateZaehlerstand(zaehlerstand: Zaehlerstand) {
    console.log(zaehlerstand)
    this.reducer('updateZaehlerstand', zaehlerstand).subscribe(success => {
      this.dataStore.zaehlerstande = this.dataStore.zaehlerstande.filter(el => el.id != zaehlerstand.id)
      this.dataStore.zaehlerstande.push(zaehlerstand)
      this._zaehlerstande.next(Object.assign({}, this.dataStore).zaehlerstande)
    })
  }
}
