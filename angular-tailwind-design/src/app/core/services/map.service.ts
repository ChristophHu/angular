import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { Marker } from '../models/marker';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PositionLogEntry } from '../models/positionlogentry';
import { retry, take } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MapService implements OnInit {

    // data
    private _alleSchiffePositionLog = new BehaviorSubject<PositionLogEntry[]>([])
    readonly alleSchiffePositionLog = this._alleSchiffePositionLog.asObservable()

    // dataStore
    private dataStore: { alleSchiffePositionLog: PositionLogEntry[] } = { alleSchiffePositionLog: [] }

  // public sub$ = new Subject<Position>()
  // public markerGroup$ = new ReplaySubject<any[]>(1)
  // private markerGroup: Marker[] = [] // L.Marker in leaflet
  
  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  
  ngOnInit(): void {
    // const position: Position = { latitude: 52.5, longitude: 13.5}
    // this.sub$.next(position)
  }

  public dateToLocalISOString(dt: Date): string {
    dt.setHours(new Date().getHours()+2)
    return dt.toISOString().substring(0,16)
  }

  // addMarkerToGroup(marker: Marker[]) {
  //   this.markerGroup = []
  //   this.markerGroup.push(...marker)
  //   this.markerGroup$.next(this.markerGroup)
  // }

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
        case 'getLastPositionsFromAllShips':
            param = ``
            break

        default:
            break
    }

    return this.httpClient.get(baseURL + param, { headers: { 'Authorization': 'Bearer ' + this.authService.tokenValue } }).pipe(retry(2),take(1))
  }

  // getAllPositionLog(): Observable<PositionLogEntry[]> {
  //   // Alle Log-Einträge
  //   return this.httpClient.get<PositionLogEntry[]>('http://localhost:3000/positions')
  // }

  getLastPositionsFromAllShips() {
    const source$ = this.getReducer('getLastPositionsFromAllShips', {})
    source$.subscribe((data: any) => {
      console.log(data)
        this.dataStore.alleSchiffePositionLog = data
        this._alleSchiffePositionLog.next(Object.assign({}, this.dataStore).alleSchiffePositionLog)
    })
  }

  // getShipPositionLog(id_ship: number): Observable<PositionLogEntry[]> {
  //   // Alle Log-Einträge zu einem Schiff
  //   return this.httpClient.get<PositionLogEntry[]>(`http://localhost:3000/positions?id_ship=${id_ship}`)
  // }

  // getPositionLogEntry(id_entry: number): Observable<PositionLogEntry> {
  //   // einen Log-Eintrag zu einem Schiff
  //   return this.httpClient.get<PositionLogEntry>(`http://localhost:3000/positions/${id_entry}`)
  // }

  // getLastShipPositions(): Observable<PositionLogEntry[]> {
  //   // letzter Log-Eintrag zu allen Schiffen
  //   return this.httpClient.get<PositionLogEntry[]>(`http://localhost:3000/positions?_sort=date&_order=asc&_limit=2`)
  // }

  // createPositionLogEntry(body: PositionLogEntry) {
  //   this.httpClient.post('http://localhost:3000/positions', JSON.stringify(body), this.httpOptions).subscribe(data => {
  //     console.log(data)
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  // updatePositionLogEntry(id_entry: number, body: PositionLogEntry) {
  //   console.log(id_entry)
  //   this.httpClient.patch(`http://localhost:3000/positions/${id_entry}`, JSON.stringify(body), this.httpOptions).subscribe(data => {
  //     console.log(data)
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  // deletePositionLogEntry(id_entry: number) {
  //   // Log-Eintrag zur id löschen
  //   this.httpClient.delete(`http://localhost:3000/positions/${id_entry}`)
  // }

}
