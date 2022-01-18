import { NgModule } from '@angular/core';
// import { IconLibraryModule } from 'dist/icon-library/icon-library';
import { NotificationsComponent } from './notifications.component';

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    // IconLibraryModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
