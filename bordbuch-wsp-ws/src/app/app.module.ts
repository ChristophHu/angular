import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { MarkdownModule } from 'ngx-markdown';
import { RootStoreModule } from './store/root-store.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ConnectionService } from './core/services/connection.service';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    BrowserAnimationsModule,
    RootStoreModule,
    MarkdownModule.forRoot(),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
