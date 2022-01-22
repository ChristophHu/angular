import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationContainerComponent } from './components/notification-container/notification-container.component';
import { NotificationComponent } from './components/notification-container/notification/notification.component';

@NgModule({
  declarations: [
    NotificationContainerComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NotificationContainerComponent
  ]
})
export class RxjsNotificationsModule { }
