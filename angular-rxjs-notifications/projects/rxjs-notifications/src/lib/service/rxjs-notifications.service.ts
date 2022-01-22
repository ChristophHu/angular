import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification, NotificationType } from './../model/notification.model'

@Injectable({
  providedIn: 'root'
})
export class RxjsNotificationsService {

  private source$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([{ id: '1', content: 'Das ist ein Test', date: new Date(), title: 'Testtitle', type: NotificationType.Alert }])
  readonly notifications = this.source$.asObservable()

  constructor() { }

  getAllNotifications(): Notification[] {
    return this.source$.getValue()
  }
  getNotification(id: string): Notification {
    const notifications = this.source$.getValue()
    const notification =  notifications.filter(el => el.id == id)
    return notification[0]
  }

  insertNotification(insert: Notification) {
    this.source$.next([...this.getAllNotifications(), insert])
  }
  updateNotification(update: Notification) {
    this.source$.next([...this.getAllNotifications().filter(el => el.id == update.id), update])
  }
  deleteNotification(id: string) {
    this.source$.next(this.getAllNotifications().filter(el => el.id != id))
  }
}
