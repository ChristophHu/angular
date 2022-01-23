import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification, NotificationType } from './../model/notification.model'

@Injectable({
  providedIn: 'root'
})
export class RxjsNotificationsService {

  private _notifications$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([])
  readonly notifications$ = this._notifications$.asObservable()
  private dataStore: { notifications: Notification[] } = { notifications: [] }

  constructor() { }

  addAndResponseNotification(notification: Notification): Observable<any> {
    return new Observable ((observer) => {
      // add notification
      const id: string = this.generateId()
      const insert: Notification = Object.assign({}, notification, { id: id, date: new Date().toISOString(), response: null })

      // add notification to database
      this.dataStore.notifications.push(insert)
    	this._notifications$.next(Object.assign({}, this.dataStore).notifications)

      // 
      this.notifications$.subscribe((notifications: Notification[]) => {
        notifications.forEach(notification => {
          if (notification.id == id && notification.response != null) {
            observer.next(notification.response)
          }
        })
      })
    })
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  response(id: string, response: any) {
    console.log(this.dataStore.notifications)
    this.dataStore.notifications.forEach(notification => {
      if (notification.id == id) {
        notification.response = response
        this._notifications$.next(Object.assign({}, this.dataStore).notifications)
      }
    })
    console.log(this.dataStore.notifications)
  }
}
