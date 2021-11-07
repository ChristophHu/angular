import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from './notification-bar.component';
import { IconsModule } from 'projects/icons/src/lib/icons.module';

@NgModule({
  declarations: [
    NotificationBarComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    NotificationBarComponent
  ]
})
export class NotificationBarModule { }
