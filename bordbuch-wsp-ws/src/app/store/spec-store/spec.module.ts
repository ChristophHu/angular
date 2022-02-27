import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/models/feature'
import { Effects } from './store/effects'
import { reducer } from './store/reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Spec, reducer),
    EffectsModule.forFeature([Effects])
  ],
  providers: []
})
export class SpecModule { }
