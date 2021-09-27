import { Injectable, OnInit } from '@angular/core';
import { interval, Observable, ReplaySubject, Subject } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { Marker } from '../models/marker';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PositionLogEntry } from '../models/positionlogentry';

@Injectable({
  providedIn: 'root'
})
export class MapService implements OnInit {
  // public sub$ = new Subject<Position>()
  public markerGroup$ = new ReplaySubject<any[]>(1)
  private markerGroup: Marker[] = [] // L.Marker in leaflet
  
  private _currentPosition = new Subject<Position>()
  readonly currentPosition = this._currentPosition.asObservable()

  private httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.getCurrentPosition()
  }

  // public dateToLocalISOString(dt: Date): string {
  //   dt.setHours(new Date().getHours()+2)
  //   return dt.toISOString().substring(0,16)
  // }


  // addMarkerToGroup(marker: Marker[]) {
  //   this.markerGroup = []
  //   this.markerGroup.push(...marker)
  //   this.markerGroup$.next(this.markerGroup)
  // }

  // getAllPositionLog(): Observable<PositionLogEntry[]> {
  //   // Alle Log-Einträge
  //   return this.httpClient.get<PositionLogEntry[]>('http://localhost:3000/positions')
  // }

  // getShipPositionLog(id_ship: number): Observable<PositionLogEntry[]> {
  //   return this.httpClient.get<PositionLogEntry[]>(`http://localhost:3000/positions?id_ship=${id_ship}`)
  // }

  // getPositionLogEntry(id_entry: number): Observable<PositionLogEntry> {
  //   return this.httpClient.get<PositionLogEntry>(`http://localhost:3000/positions/${id_entry}`)
  // }

  // getLastShipPositions(): Observable<PositionLogEntry[]> {
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
  //   this.httpClient.delete(`http://localhost:3000/positions/${id_entry}`)
  // }

  getCurrentPosition(): any {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        position.coords.latitude
        this._currentPosition.next(position.coords)
      })
    }
  }
}
