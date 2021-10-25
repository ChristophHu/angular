import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/model/feature'
import { Effects } from './effects'
import { reducer } from './reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.LastPosition, reducer),
    EffectsModule.forFeature([Effects])
  ]
})
export class LastPositionModule { }
