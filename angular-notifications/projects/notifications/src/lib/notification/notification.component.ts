import { Component, Input, OnInit } from '@angular/core';
import { NotificationType } from '../model/notification-type.enum';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() title: string = 'Title'
  @Input() type: NotificationType = NotificationType.Success

  constructor() { }

  ngOnInit(): void {
    var Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
    Notification!.classList.remove("hidden");

    setTimeout(function () {
        Notification!.style.transform = "translateX(0%)";
    }, 200);
  }

  public closeModal() {
    let Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
  }

  public response() {
    console.log('res')
  }
}
