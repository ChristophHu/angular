import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from 'projects/icons/src/lib/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavModule } from './core/navbar/topnav/topnav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    TopnavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
