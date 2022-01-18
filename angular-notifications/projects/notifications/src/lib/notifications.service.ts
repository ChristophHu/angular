import { Injectable } from '@angular/core'
import { Notification } from './model/notification.model'
// import { NotificationType } from './model/notification-type.enum'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  // https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
  private subject = new Subject<Notification>()

  constructor() { }

  onAlert(): Observable<Notification> {
    return this.subject.asObservable()
  }

  alert(notification: Notification) {
    this.subject.next(notification)
  }

  response(id: string) {
    
  }

  // set(notification: Notification): Notification {
  //   // do something with options
  //   this.addNotification(notification)
  //   return notification;
  // }

  // success(title: string = '', content: string = '', type: NotificationType ): Notification {
  //   return this.set({ title: title, content: content, type: type = NotificationType.Success });
  // }

  // addNotification(notification: Notification) {

  // }

  // insert(notification: Notification): Observable<any> {
  //   return new Observable ((observer) => {
  //       const source$ = this.set(notification)
  //       source$.subscribe((data: any) => {
  //           observer.next(data.id)
  //       }), (error: any) => observer.error(error)
  //   })
  // }
}
