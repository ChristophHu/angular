import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavModule } from './core/navbar/topnav/topnav.module';
import { NotificationBarModule } from './core/notifications/notification-bar/notification-bar.module';

import { SharedModule } from './shared/shared.module';
import { NotificationModalComponent } from './core/notifications/notification-modal/notification-modal.component';
import { NotificationsComponent } from './core/notifications/notification-modal/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationModalComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // components
    TopnavModule,
    NotificationBarModule,

    // shared
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
