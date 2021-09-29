import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { HomeComponent } from './modules/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
