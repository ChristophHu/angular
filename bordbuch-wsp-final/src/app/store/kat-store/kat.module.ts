import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/model/feature'
import { AppService } from 'src/app/core/services/app.service'
import { Effects } from './effects'
import { shipReducer } from './reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Kat, shipReducer),
    EffectsModule.forFeature([Effects])
  ],
  providers: [
    AppService
  ]
})
export class ShipModule { }
