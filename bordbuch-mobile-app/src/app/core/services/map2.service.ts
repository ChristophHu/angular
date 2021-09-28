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


  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.getCurrentPosition()
  }

  getCurrentPosition(): any {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        position.coords.latitude
        this._currentPosition.next(position.coords)
      })
    }
  }
}
