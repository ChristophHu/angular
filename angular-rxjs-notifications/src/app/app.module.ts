import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxjsNotificationsModule } from 'projects/rxjs-notifications/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RxjsNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
