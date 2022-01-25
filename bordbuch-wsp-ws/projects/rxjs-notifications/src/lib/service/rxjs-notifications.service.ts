import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Notification, NotificationType } from './../model/notification.model'
import { Response } from './../model/response.model'

@Injectable({
  providedIn: 'root'
})
export class RxjsNotificationsService {

  private _notifications$: Subject<Notification[]> = new Subject<Notification[]>()
  readonly notifications$ = this._notifications$.asObservable()

  private _response$: Subject<Response[]> = new Subject<Response[]>()
  readonly response$ = this._response$.asObservable()

  private dataStore: { notifications: Notification[], response: Response[] } = { notifications: [], response: [] }

  constructor() { }

  addAndResponseNotification(notification: Notification): Observable<any> {
    return new Observable ((observer) => {
      // add notification
      const id: string = this.generateId()
      console.log(`neue id: ${id}`)
      const insert: Notification = Object.assign({}, notification, { id: id, date: new Date().toISOString() })

      // add notification to database
      this.dataStore.notifications.push(insert)
      console.log(`datastore: ${this.dataStore.notifications}`)
    	this._notifications$.next(Object.assign({}, this.dataStore).notifications)

      // 
      this.response$.subscribe((response: Response[]) => {
        response.forEach(response => {
          if (response.id == id) {
            observer.next(response.reply)
            this.removeNotification(id)
          }
        })
      })
    })
  }

  removeNotification(id: string) {
    this.dataStore.notifications = this.dataStore.notifications.filter(notification => notification.id != id)
    this._notifications$.next(Object.assign({}, this.dataStore).notifications)
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  response(response: Response) {
    this.removeNotification(response.id)
    this.dataStore.response.push(response)
    this._response$.next(Object.assign({}, this.dataStore).response)
  }
}
