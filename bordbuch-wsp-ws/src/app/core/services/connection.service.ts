import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private backendUrl: string = ''
  private token     : string = ''

  constructor() {
    console.log('ConnectionService constructor')
  }

  getBackendUrl(): string {
    console.log(this.backendUrl)
    return this.backendUrl
  }
  setBackendUrl(backendUrl: string) {
    console.log(backendUrl)
    this.backendUrl = backendUrl
  }

  getToken(): string {
    return this.token
  }
  setToken(token: string) {
    this.token = token
  }
}
