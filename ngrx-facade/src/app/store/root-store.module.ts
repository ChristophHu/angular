import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './root-store.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
  ]
})
export class RootStoreModule {}
