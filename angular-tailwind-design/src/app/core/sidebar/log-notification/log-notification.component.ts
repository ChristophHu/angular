import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Log } from '../../models/log';
import { Map } from 'src/app/core/models/map';

@Component({
  selector: 'app-log-notification',
  templateUrl: './log-notification.component.html',
  styleUrls: ['./log-notification.component.sass']
})
export class LogNotificationComponent {
  isActive: boolean = false
  @Output() notificationActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() set notificationActive(value: boolean) {
    this.isActive = value
  }

  log: Log[] = [
    { who: 'Christoph', when: new Date(), what: 'logged in'},
    { who: 'Christoph', when: new Date(), what: 'logged out'}
  ]
  map: Map[] = [
    { who: 'Spree 22', when: new Date(), what: 'set point at the coordinates', where: { latitude: 52.3, longitude: 13.3 }}
  ]

  constructor() { }

  close() {
    this.isActive = false
    this.notificationActiveChange.emit(this.isActive)
  }

}
