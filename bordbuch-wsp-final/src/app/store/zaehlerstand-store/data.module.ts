import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/model/feature'
import { AppService } from 'src/app/core/services/app.service'
import { Effects } from './effects'
import { reducer } from './reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Zaehlerstand, reducer),
    EffectsModule.forFeature([Effects])
  ],
  providers: [
    AppService
  ]
})
export class ZaehlerstandModule { }
