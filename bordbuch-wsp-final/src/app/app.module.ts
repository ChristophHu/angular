import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { metaReducers, reducers } from './store/root-store.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    RootStoreModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
