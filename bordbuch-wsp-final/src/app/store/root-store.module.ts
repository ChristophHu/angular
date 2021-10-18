import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './root-store.state';

import { ShipSelectionModule } from './ship-selection-store/ship-selection.module';

@NgModule({
  imports: [
    CommonModule,
    // ShipSelectionModule,
    // StoreModule.forRoot({}),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({ 
      stateKey: 'router', 
      routerState: RouterState.Minimal 
    }),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}