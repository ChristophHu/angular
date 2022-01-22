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
    this._RxjsNotificationService.insertNotification({ id: '2', content: 'T', date: new Date(), title: 'T', type: NotificationType.Success })
  }

  getNotification() {
    console.log(this._RxjsNotificationService.getAllNotifications())
  }
}
