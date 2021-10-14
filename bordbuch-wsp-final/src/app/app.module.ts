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
import { metaReducers, reducers } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true
      }
    }),
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
