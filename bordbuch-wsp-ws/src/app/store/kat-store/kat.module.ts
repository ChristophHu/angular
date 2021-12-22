import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/models/feature'
import { AppService } from 'src/app/core/services/app.service'
import { Effects } from './store/effects'
import { reducer } from './store/reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Kat, reducer),
    EffectsModule.forFeature([Effects])
  ],
  providers: [
    AppService
  ]
})
export class KatModule { }
