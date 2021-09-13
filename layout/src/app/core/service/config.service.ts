import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { merge } from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config: BehaviorSubject<any>

  constructor() {
    this._config = new BehaviorSubject({})
  }

  set config(value: any) {
    const config = merge({}, this._config.getValue(), value);
    console.log(config)

    this._config.next(config);
  }

  get config$(): Observable<any> {
      return this._config.asObservable();
  }
}
