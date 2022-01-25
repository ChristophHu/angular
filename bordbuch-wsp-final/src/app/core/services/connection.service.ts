import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private backendUrl: string = ''
  private token     : string = ''

  constructor() { }

  getBackendUrl(): string {
    return this.backendUrl
  }
  setBackendUrl(backendUrl: string) {
    this.backendUrl = backendUrl
  }

  getToken(): string {
    return this.token
  }
  setToken(token: string) {
    this.token = token
  }
}
