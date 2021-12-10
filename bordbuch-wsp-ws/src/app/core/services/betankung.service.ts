import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { retry, take } from 'rxjs/operators';
// import { AuthService } from '../authentication/auth.service';
import { Betankung } from '../models/betankung';

@Injectable({
  providedIn: 'root'
})

export class BetankungService {
  // data
  test: string = '[{"id":"b1311fb5-0df2-4765-9e9e-e80e720a364c","id_ship":"1","date":"2021-12-02 12:45:56.000","location":{"latitude":52.676300048828125,"longitude":13.277799606323242},"ort":"Hier","fuel":"Diesel","fuelfillingquantity":"12"},{"id":"646c23a2-c83f-4ad9-a373-9b684dd6cdbc","id_ship":"1","date":"2021-12-02 12:42:30.000","location":{"latitude":52.676300048828125,"longitude":13.277799606323242},"ort":"Da","fuel":"Benzin","fuelfillingquantity":"1234"},{"id":"42f4866e-9134-4a74-9e81-4d3b64bf62d1","id_ship":"1","date":"2021-11-17 20:45:50.000","location":{"latitude":52.714801788330078,"longitude":13.148871421813965},"ort":"Wo","fuel":"Diesel","fuelfillingquantity":"999"},{"id":"a2156c19-29cc-4b9a-b6d8-b7632f9ae11d","id_ship":"1","date":"2021-11-17 20:38:54.000","location":{"latitude":52.714801788330078,"longitude":13.148871421813965},"ort":"Hier","fuel":"Diesel","fuelfillingquantity":"53"},{"id":"9e8d1146-feca-48ac-bc5b-2c955779c79c","id_ship":"1","date":"2021-11-17 13:36:01.000","location":{"latitude":52.482139587402344,"longitude":13.387846946716309},"ort":"Test","fuel":"Diesel","fuelfillingquantity":"3"},{"id":"f56a12f1-3634-4415-8eb5-ed71b6d92456","id_ship":"1","date":"2021-11-17 11:57:23.000","location":{"latitude":1,"longitude":1},"ort":"SG","fuel":"Diesel","fuelfillingquantity":"1"},{"id":"d08a6cee-7e21-43da-8954-3de054524c86","id_ship":"1","date":"2021-10-26 14:27:24.000","location":{"latitude":1,"longitude":1},"ort":"Da","fuel":"Di","fuelfillingquantity":"25"},{"id":"42144f0c-d62c-4fe2-9bd0-639dd6185799","id_ship":"1","date":"2021-10-25 16:21:34.000","location":{"latitude":1,"longitude":1},"ort":"Säule A1","fuel":"Diesel","fuelfillingquantity":"252"},{"id":"a269aff9-fcaa-4b7a-9412-f55715eaec15","id_ship":"1","date":"2021-10-24 13:18:07.000","location":{"latitude":1,"longitude":1},"ort":"averva","fuel":"retr","fuelfillingquantity":"5"},{"id":"e8c46b9c-cd6e-49f8-89fe-2c386e1887c2","id_ship":"1","date":"2021-10-01 11:03:00.000","location":{"latitude":52.676300048828125,"longitude":13.277799606323242},"ort":"Säule Süd","fuel":"Benzin f. Generator","fuelfillingquantity":"32"},{"id":"b125dde1-039d-4298-832a-1b936930f6fe","id_ship":"1","date":"2021-09-16 09:35:22.000","location":{"latitude":52,"longitude":13},"ort":"Tanke Säule 1a","fuel":"Diesel","fuelfillingquantity":"245"}]'
  t: Betankung[] = JSON.parse(this.test)
  private _betankungen = new BehaviorSubject<Betankung[]>(this.t)
  readonly betankungen = this._betankungen.asObservable()
  
  // dataStore
  private dataStore: { betankungen: Betankung[] } = { betankungen: [] }

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //   })
  // }

  constructor() {}

  // get _dataStore() {
  //   return this.dataStore
  // }

  // reducer(action: string, data: any): Observable<any> {
  //   console.info(`reducer | action: '${action}', data: ${data}`)
  //   const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
  //   let param = ``
  //   switch (action) {

  //       case 'updateBetankung': {
  //           param = `id=${data.id}&id_schiff=${data.id_schiff}&latitude=${data.latitude}&longitude=${data.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfilllingquantity}`
  //           break
  //       }
  //       case 'deleteBetankung': {
  //           param = `id=${data}`
  //           break
  //       }

  //       default:
  //           console.error('There is no action to switch.')
  //           break
  //   }
    
  //   return this.httpClient.post(
  //       baseURL, 
  //       param, { 
  //           headers: { 
  //               'Content-Type': 'application/x-www-form-urlencoded', 
  //               'Authorization': 'Bearer ' + this.authService.tokenValue 
  //           }
  //       })
  //       .pipe(retry(2), take(1))
  // }

  // getReducer(action: string, data: any): any {
  //   console.info(`getreducer | action: '${action}', data: ${data}`)
  //   const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
  //   let param = ``
  //   switch (action) {
  //       case 'getBetankungen':
  //           param = `?id_schiff=1&all=true`
  //           break

  //       default:
  //           break
  //   }

  //   return this.httpClient.get(baseURL + param, { headers: { 'Authorization': 'Bearer ' + this.authService.tokenValue } }).pipe(retry(2),take(1))
  // }
  
  // getBetankungen() {
  //   const source$ = this.getReducer('getBetankungen', {})
  //   const source$ = from(['1'])
  //   source$.subscribe((data: any) => {
  //     console.log(data)
  //       this.dataStore.betankungen = data
  //       this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
  //   })
  // }
  // createBetankung(betankung: Betankung) {

  // }
  // updateBetankung(betankung: Betankung) {
  //   console.log(betankung)
  //   this.reducer('updateBetankung', betankung).subscribe(success => {
  //     this.dataStore.betankungen = this.dataStore.betankungen.filter(el => el.id != betankung.id)
  //     this.dataStore.betankungen.push(betankung)
  //     this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
  //   })
  // }
  // deleteBetankung(id: string) {
  //   console.log(id)
  //   this.reducer('deleteBetankung', id).subscribe(success => {
  //     this.dataStore.betankungen = this.dataStore.betankungen.filter(el => el.id != id)
  //     this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
  //   })
  // }
}
