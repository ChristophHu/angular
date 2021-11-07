import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.sass'],
  animations   : Animations
})
export class NotificationBarComponent implements OnInit {
  notification: boolean = false;

  notificationBtn() {
    this.notification = !this.notification;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
