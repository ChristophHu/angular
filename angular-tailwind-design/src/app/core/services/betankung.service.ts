import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { retry, take } from 'rxjs/operators';
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

  constructor(private httpClient: HttpClient) { }

  get _dataStore() {
    return this.dataStore
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

    return this.httpClient.get(baseURL + param).pipe(retry(2),take(1))
  }
  
  getBetankungen() {
    const source$ = this.getReducer('getBetankungen', {})
    source$.subscribe((data: any) => {
      console.log(data)
        this.dataStore.betankungen = data
        this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    })
  }

  createBetankung(body: Betankung) {
    // console.log(body)
    // this.httpClient.post<Betankung>(`http://localhost:3000/betankungen`, JSON.stringify(body), this.httpOptions).subscribe(data => {
    //   this.dataStore.betankungen.push(data)
    //   this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    // }, error => console.log(error))
  }

  updateBetankung(body: Betankung) {
    console.log(body)
    this.httpClient.put<Betankung>(`http://localhost:3000/betankungen/${body.id}`, JSON.stringify(body), this.httpOptions).subscribe(data => {
      this.dataStore.betankungen.forEach((item, index) => {
        if (item.id === data.id) { this.dataStore.betankungen[index] = data }
      })
      this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    }, error => console.log(error))
  }

  deleteBetankung(id: string) {
    // this.httpClient.delete(`http://localhost:3000/betankungen/${id}`).subscribe(response => {
    //   this.dataStore.betankungen.forEach((item, index) => {
    //     if (item.id === id) { this.dataStore.betankungen.splice(index, 1) }
    //   })
    //   this._betankungen.next(Object.assign({}, this.dataStore).betankungen)
    // }, error => console.log(error))
  }

  public dateToLocalISOString(dt: Date): string {
    dt.setHours(new Date().getHours()+2)
    return dt.toISOString().substring(0,16)
  }

  // getBetankung(id: number) {
  //   this.httpClient.get<Betankung>(`http://localhost:3000/betankungen/${id}`).subscribe(data => {
  //     let notFound = true;
  //     this.dataStore.betankungen.forEach((item, index) => {
  //       if (item.id === data.id) {
  //         this.dataStore.betankungen[index] = data;
  //         notFound = false;
  //       }
  //     });
  //     if (notFound) {
  //       this.dataStore.betankungen.push(data);
  //     }
  //     this._betankungen.next(Object.assign({}, this.dataStore).betankungen);
  //   }, error => console.log(error));
  // }

}
