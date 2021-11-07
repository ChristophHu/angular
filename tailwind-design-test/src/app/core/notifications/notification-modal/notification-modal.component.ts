import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.sass']
})
export class NotificationModalComponent implements OnInit {

  constructor(private modalService: ModalService<NotificationsComponent>) { }

  ngOnInit(): void {
  }

  async showModal(): Promise<void> {
    const { NotificationsComponent } = await import('./notifications/notifications.component')
    this.modalService.open(NotificationsComponent, {
      data: {
        // id: id
      }
    })
  }

}
