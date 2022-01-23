import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification, NotificationType } from './../model/notification.model'

@Injectable({
  providedIn: 'root'
})
export class RxjsNotificationsService {

  private source$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([{ id: '1', content: 'Das ist ein Test', date: new Date(), title: 'Testtitle', type: NotificationType.Alert }])
  readonly notifications = this.source$.asObservable()

  private _notifications$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([])
  readonly notifications$ = this._notifications$.asObservable()
  private dataStore: { notifications: Notification[] } = { notifications: [] }

  constructor() {
    console.log(this.generateId())
  }

  // getAllNotifications(): Notification[] {
  //   return this.source$.getValue()
  // }

  addAndResponseNotification(notification: Notification): Observable<any> {
    return new Observable ((observer) => {
      // add notification
      const id: string = this.generateId()
      const insert: Notification = Object.assign({}, notification, { id: id, date: new Date().toISOString(), response: null })
      this.source$.next([insert])

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
    this.dataStore.notifications.forEach(notification => {
      if (notification.id == id) {
        notification.response = response
        this._notifications$.next(Object.assign({}, this.dataStore).notifications)
      }
    })
  }

  // updateNotification(update: Notification) {
  //   this.source$.next([...this.getAllNotifications().filter(el => el.id == update.id), update])
  // }
  // deleteNotification(id: string) {
  //   this.source$.next(this.getAllNotifications().filter(el => el.id != id))
  // }


}
