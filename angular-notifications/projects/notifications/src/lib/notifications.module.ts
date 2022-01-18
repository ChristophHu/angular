import { NgModule } from '@angular/core';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';
import { NotificationComponent } from './notification/notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from './notifications.service';

@NgModule({
  declarations: [
    NotificationsContainerComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NotificationsContainerComponent
  ],providers: [
    NotificationsService
  ]
})
export class NotificationsModule { }
