import { Injectable } from '@angular/core';
import { Position } from '../model/position';

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
    // return new Promise(
    //   (resolve, reject) => navigator.geolocation.getCurrentPosition(
    //     position => {
    //       resolve(position.coords)
    //     },
    //     error => { reject(error) }
    //   )
    // )
    return new Promise(
      (resolve, reject) => navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords)
      }, (err) => {
        reject(err)
      }, { enableHighAccuracy: true })
    )
  }
}
