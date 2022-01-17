import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/model/feature'
import { AppService } from 'src/app/core/services/app.service'
import { ShipEffects } from './ship.effects'
import { shipReducer } from './ship.reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Ship, shipReducer),
    EffectsModule.forFeature([ShipEffects])
  ],
  providers: [
    
  ]
})
export class ShipModule { }
