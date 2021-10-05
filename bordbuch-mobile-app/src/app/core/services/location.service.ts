import { Injectable } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private _currentPosition: Position = { latitude: 0, longitude: 0 }

  constructor() { }
  
  get currentPosition(): Position {
    return this._currentPosition
  }

  public getCurrentPosition(): Promise<Position> {
    return new Promise(
      (resolve, reject) => navigator.geolocation.getCurrentPosition(
        position => { resolve(position.coords) },
        error => { reject(error) }
      )
    )
  }
}
