import { Component, Input, OnInit } from '@angular/core'
import { RxjsNotificationsService } from '../../../service/rxjs-notifications.service';
import { Notification, NotificationType } from './../../../model/notification.model'

@Component({
  selector: 'lib-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification!: Notification
  
  constructor(private _RxjsNotificationsService: RxjsNotificationsService) { }

  ngOnInit(): void {
    // get Animations
    var Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
    Notification!.classList.remove("hidden");

    setTimeout(function () {
        Notification!.style.transform = "translateX(0%)";
    }, 200);
  }

  public closeNotification() {
    let Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
  }

  response(id: string = '') {
    this._RxjsNotificationsService.response(id)
  }

}
