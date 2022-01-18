import { Injectable } from '@angular/core'
import { Notification } from './model/notification.model'
import { NotificationType } from './model/notification-type.enum'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  set(notification: Notification): Notification {
    // do something with options
    this.addNotification(notification)
    return notification;
  }

  success(title: string = '', content: string = '', type: NotificationType ): Notification {
    return this.set({ title: title, content: content, type: type = NotificationType.Success });
  }

  addNotification(notification: Notification) {

  }

  // insert(notification: Notification): Observable<any> {
  //   return new Observable ((observer) => {
  //       const source$ = this.set(notification)
  //       source$.subscribe((data: any) => {
  //           observer.next(data.id)
  //       }), (error: any) => observer.error(error)
  //   })
  // }
}
