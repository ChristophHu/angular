import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { Reparatur } from '../models/reparatur';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})

export class ReparaturService {
  // data reparaturen
  private _reparaturen = new BehaviorSubject<Reparatur[]>([])
  readonly reparaturen$ = this._reparaturen.asObservable()

  private _schaeden = new BehaviorSubject<Reparatur[]>([])
  readonly schaeden$ = this._schaeden.asObservable()

  private _status = new BehaviorSubject<Status[]>([])
  readonly status$ = this._status.asObservable()

  // dataStore
  private dataStore: { reparaturen: Reparatur[], schaeden: Reparatur[], status: Status[] } = { reparaturen: [], schaeden: [], status: [] }

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
  }

  constructor(private httpClient: HttpClient) { }

  get _dataStore() {
    return this.dataStore
  }

  public dateToLocalISOString(dt: Date): string {
    dt.setHours(new Date().getHours()+2)
    return dt.toISOString().substring(0,16)
  }
  reducer(action: string, data: any): Observable<any> {
    console.info(`reducer | action: '${action}', data: ${data}`)
    const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
    let param = ``
    switch (action) {

        // reparatur
        case 'insertReparatur':
            param = `id_schiff=${data.ship_id}&id_status=${data.status}&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
            break

        case 'updateReparatur':
            param = `id=${data.id}&id_schiff=${data.ship_id}&id_status=${data.status}&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
            break

        case 'deleteReparatur':
            param = `id=${data}`
            break

        default:
            console.error('There is no action to switch.')
            break
    }
    
    return this.httpClient.post(baseURL, param, this.httpOptions)
        .pipe(retry(2), take(1))
  }
  getReducer(action: string, data: any): any {
    const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
    let param = ``
    switch (action) {
        case 'getReparaturen':
		case 'getStatustypen':
            param = ``
            break

        case 'getReparaturenVonSchiff':
            param = `?id_schiff=${data}`
            break

        default:
            break
    }

    return this.httpClient.get(baseURL + param).pipe(retry(2),take(1))
  }

  getStatustypen() {
    const source$ = this.getReducer('getStatustypen', {})
    source$.subscribe((data: any) => {
      this.dataStore.status = data
      this._status.next(Object.assign({}, this.dataStore).status)
    })
  }

  getReparaturen() {
	const source$ = this.getReducer('getReparaturen', {})
	source$.subscribe((data: any) => {
		this.dataStore.schaeden = data.filter((data: any) => data.status == 'Nicht bearbeitet' || data.status == 'In Bearbeitung')
		this._schaeden.next(Object.assign({}, this.dataStore).schaeden)

		this.dataStore.reparaturen = data.filter((data: any) => data.status == 'Abgeschlossen')
		this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
	})
  }
  createReparatur(reparatur: Reparatur) {
    this.reducer('insertReparatur', reparatur).subscribe(data => {
      reparatur.id = data.id

      reparatur.status = this.getStatusBezeichnung(reparatur.status)
      if (reparatur.status == 'Nicht bearbeitet' || reparatur.status == 'In Bearbeitung') {
        this.dataStore.schaeden.push(reparatur)
        this._schaeden.next(Object.assign({}, this.dataStore).schaeden)
      } else {
        this.dataStore.reparaturen.push(reparatur)
        this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
      }
    })
  }
  updateReparatur(reparatur: Reparatur) {
    this.reducer('updateReparatur', reparatur).subscribe(status => {
      if (status == '200') {}

      this.dataStore.schaeden = this.dataStore.schaeden.filter(el => el.id != reparatur.id)
      this.dataStore.reparaturen = this.dataStore.reparaturen.filter(el => el.id != reparatur.id)

      reparatur.status = this.getStatusBezeichnung(reparatur.status)
      if (reparatur.status == 'Nicht bearbeitet' || reparatur.status == 'In Bearbeitung') {
        this.dataStore.schaeden.push(reparatur)
        this._schaeden.next(Object.assign({}, this.dataStore).schaeden)
      } else {
        this.dataStore.reparaturen.push(reparatur)
        this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
      }
    })
  }
  deleteReparatur(id: string) {
    this.reducer('deleteReparatur', id).subscribe(status => {
      if (status == '200') {}

      this.dataStore.schaeden = this.dataStore.schaeden.filter(el => el.id != id)
      this._schaeden.next(Object.assign({}, this.dataStore).schaeden)
      this.dataStore.reparaturen = this.dataStore.reparaturen.filter(el => el.id != id)
      this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
    })
    // this.httpClient.delete(`http://localhost:3000/reparaturen/${id}`).subscribe(response => {
    //     this.dataStore.reparaturen.forEach((item, index) => {
    //         if (item.id === id) { this.dataStore.reparaturen.splice(index, 1) }
    //     })
    //     this.reparaturen$.next(Object.assign({}, this.dataStore).reparaturen)
    // }, error => console.log(error))
  }

  getStatusBezeichnung(id: string): string {
    let status = this.dataStore.status.find(el => el.id == id)
    return status!.bezeichnung
  }
}

