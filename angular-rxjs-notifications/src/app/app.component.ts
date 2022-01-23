import { Component } from '@angular/core';
import { NotificationType } from 'projects/rxjs-notifications/src/lib/model/notification.model';
import { RxjsNotificationsService } from 'projects/rxjs-notifications/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-rxjs-notifications';

  constructor(private _RxjsNotificationService: RxjsNotificationsService) {}

  insertNotification() {
    let id: string
    this._RxjsNotificationService.insertNotification({ content: 'T', title: 'T', type: NotificationType.Success }).subscribe(id => id)
    // this._RxjsNotificationService.notifications$.subscribe(data => {
    //   console.log(data)
    //   if 
    // })
  }

  getNotification() {
    console.log(this._RxjsNotificationService.getAllNotifications())
  }
}
