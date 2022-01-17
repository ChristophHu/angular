import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { shipSelectionReducer } from './ship-selection.reducers'
import { ShipSelectionEffects } from './ship-selection.effects'
import { Features } from 'src/app/core/model/feature'
// import { AppService } from 'src/app/core/services/app.service'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.ShipSelection, shipSelectionReducer),
    EffectsModule.forFeature([ShipSelectionEffects])
  ],
  providers: [
    // AppService
  ]
})
export class ShipSelectionModule { }
