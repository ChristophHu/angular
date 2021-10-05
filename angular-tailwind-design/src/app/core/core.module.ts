import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarLeftComponent } from './sidebar/sidebar-left/sidebar-left.component';
import { SimpleNavbarComponent } from './navbar/simple-navbar/simple-navbar.component';
import { LogNotificationComponent } from './sidebar/log-notification/log-notification.component';
import { MapEntryComponent } from './sidebar/log-notification/map-entry/map-entry.component';
import { LogEntryComponent } from './sidebar/log-notification/log-entry/log-entry.component';
import { SharedModule } from '../shared/shared.module';
import { IsRoleOfDirective } from '../shared/directives/is-role-of.directive';

@NgModule({
  declarations: [
    SimpleNavbarComponent,
    SidebarLeftComponent,
    LogNotificationComponent,
    MapEntryComponent,
    LogEntryComponent,
    IsRoleOfDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SimpleNavbarComponent,
    SidebarLeftComponent,
    LogNotificationComponent,
    MapEntryComponent,
    LogEntryComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
