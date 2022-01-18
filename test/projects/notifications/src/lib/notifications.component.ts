import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {
  @Output('destroy') destroy: EventEmitter<string> = new EventEmitter<string>()
  
  constructor() { }

  // private notification: Notification | undefined

  public closeModal() {
    let Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
  }

  ngOnInit(): void {
    var Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
    Notification!.classList.remove("hidden");

    setTimeout(function () {
        Notification!.style.transform = "translateX(0%)";
    }, 1000);
  }

  remove() {
    console.log('remove')
    this.destroy.emit('test')
  }
}
