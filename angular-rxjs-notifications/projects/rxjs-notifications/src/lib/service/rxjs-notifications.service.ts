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

  getAllNotifications(): Notification[] {
    return this.source$.getValue()
  }
  getNotification(id: string): Notification {
    const notifications = this.source$.getValue()
    const notification =  notifications.filter(el => el.id == id)
    return notification[0]
  }

  insertNotification(notification: Notification): Observable<string> {
    // this.source$.next([...this.getAllNotifications(), insert])
    return new Observable ((observer) => {
      const insert: Notification = Object.assign({}, notification, { id: this.generateId(), date: new Date().toISOString() })

      this.source$.next([insert])

      this.dataStore.notifications.push(insert)
    	this._notifications$.next(Object.assign({}, this.dataStore).notifications)
      console.log(this.dataStore.notifications)

      // return id
      observer.next(insert.id)
    })
  }
  updateNotification(update: Notification) {
    this.source$.next([...this.getAllNotifications().filter(el => el.id == update.id), update])
  }
  deleteNotification(id: string) {
    this.source$.next(this.getAllNotifications().filter(el => el.id != id))
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  testFunction() {
    console.time('duration')
    for (var i = 0; i < 1000; i++) {
      this.generateId()
    };
    console.timeEnd('duration')
  }

  response(id: string) {
    console.log(`response: ${id}`)
    this.dataStore.notifications.forEach(notification => {
      if (notification.id = id) console.log(`get id ${notification}`)
    })
  }
}
