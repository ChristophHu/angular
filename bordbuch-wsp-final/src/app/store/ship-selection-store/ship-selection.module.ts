import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { shipReducer } from './ship-selection.reducers';
import { ShipEffects } from './ship-selection.effects';
import { Features } from 'src/app/core/model/feature';
import { AppService } from 'src/app/core/services/app.service';

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Ship, shipReducer),
    EffectsModule.forFeature([ShipEffects])
  ],
  providers: [
    AppService
  ]
})
export class ShipSelectionModule { }
