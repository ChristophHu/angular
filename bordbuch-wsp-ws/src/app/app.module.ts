import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StreifenComponent } from './modules/components/streifen/streifen.component';
import { AktuellePositionenComponent } from './modules/components/streifen/aktuelle-positionen/aktuelle-positionen.component';
import { AuthModule } from './modules/auth/auth.module';
import { MarkdownModule } from 'ngx-markdown';
import { RootStoreModule } from './store/root-store.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
