import { Injectable } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Position } from 'src/app/core/models/position';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private _locationSubscription = new Subscription
  private _currentPosition: Position = { latitude: 0, longitude: 0 }
  private i: Observable<number> = interval(5000)

  constructor() { }
  
  locationServiceStart() {
    if (this._locationSubscription.closed == true)
    this._locationSubscription = this.i.subscribe((data: any) => {
        this.getCurrentPosition().then(position => {
          console.log(position)
          this._currentPosition = { latitude: position.latitude, longitude: position.longitude} 
        })
      }
    )
  }
  locationServiceStop() {
    console.log('locationSubscription unsubscribed')
    this._locationSubscription.unsubscribe()
  }

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
