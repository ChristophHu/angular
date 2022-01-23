import { Component } from '@angular/core';
import { Notification, NotificationType } from 'projects/rxjs-notifications/src/lib/model/notification.model';
import { RxjsNotificationsService } from 'projects/rxjs-notifications/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-rxjs-notifications';

  constructor(private _RxjsNotificationService: RxjsNotificationsService) {}

  addAndResponseNotification() {
    const aar: Notification = { content: 'AARNotification', title: 'T', type: NotificationType.Success }
    this._RxjsNotificationService.addAndResponseNotification(aar).subscribe((response: any) => {
      console.log(response)
    })
  }
}
