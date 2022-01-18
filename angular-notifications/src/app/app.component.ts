import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'projects/notifications/src/lib/notifications.service';

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Alert = 'alert',
  Info = 'info',
  Warn = 'warn'
}
export interface Notification {
    content : string
    title   : string
    type?   : NotificationType
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private _NotificationsService: NotificationsService) {}

  ngOnInit(): void {
    const notification: Notification = { content: 'testcontent', title: 'testtitle' }
    this._NotificationsService.alert(notification)
  }
  
  add() {
    const notification: Notification = { content: 'testcontent2', title: 'testtitle2' }
    this._NotificationsService.alert(notification)
  }
}
