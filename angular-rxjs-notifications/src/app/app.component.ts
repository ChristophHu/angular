import { Component } from '@angular/core'
import { Notification, NotificationType, ExceptionType } from 'projects/rxjs-notifications/src/lib/model/notification.model'
import { RxjsNotificationsService } from 'projects/rxjs-notifications/src/public-api'
import { first, take } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-rxjs-notifications';

  constructor(private _RxjsNotificationService: RxjsNotificationsService) {}

  addAndResponseNotification() {
    const aar: Notification = { content: 'Soll dierer Eintrag wirklich entfernt werden?', title: 'Eintrag löschen', type: NotificationType.Alert, exception: ExceptionType.YesNo }
    this._RxjsNotificationService.addAndResponseNotification(aar).pipe(take(1)).subscribe((response: any) => {
      console.log(response)
    })
  }
}

