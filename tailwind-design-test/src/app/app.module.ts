import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IconsModule } from 'projects/icons/src/lib/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavModule } from './core/navbar/topnav/topnav.module';
import { SharedModule } from './shared/shared.module';
import { NotificationBarComponent } from './core/notifications/notification-bar/notification-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TopnavModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
