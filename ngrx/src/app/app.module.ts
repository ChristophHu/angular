import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AdminComponent } from './admin/admin.component';
import { reducers } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ 
      stateKey: 'router', 
      routerState: RouterState.Minimal 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
