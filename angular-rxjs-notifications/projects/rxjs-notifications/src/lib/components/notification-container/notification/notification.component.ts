import { Component, Input, OnInit } from '@angular/core'
import { Notification, NotificationType } from './../../../model/notification.model'

@Component({
  selector: 'lib-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() id   : string = ''
  @Input() title: string = ''
  @Input() type : NotificationType = NotificationType.Success
  
  constructor() { }

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

}
