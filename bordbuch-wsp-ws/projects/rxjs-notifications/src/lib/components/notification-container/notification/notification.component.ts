import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { RxjsNotificationsService } from '../../../service/rxjs-notifications.service';
import { Notification, NotificationType } from './../../../model/notification.model'

@Component({
  selector: 'lib-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification!: Notification
  @Output() destroy = new EventEmitter<boolean>()

  // display = true

  constructor(private _RxjsNotificationsService: RxjsNotificationsService) { }

  ngOnInit(): void {
    // get Animations
    var Notification = document.getElementById("notification")
    Notification!.style.transform = "translateX(150%)"
    Notification!.classList.remove("hidden")

    setTimeout(function () {
        Notification!.style.transform = "translateX(0%)"
    }, 200)
  }

  async close() {
    let Notification = document.getElementById("notification")
    Notification!.style.transform = "translateX(150%)"
    await setTimeout(() => {
      this.destroy.emit(true)
    }, 400)
  }

  response(id: string = '', reply: any) {
    this._RxjsNotificationsService.response({ id, reply })
    this.close()
  }
}
