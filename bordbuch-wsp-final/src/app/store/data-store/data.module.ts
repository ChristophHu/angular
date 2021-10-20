import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { Features } from 'src/app/core/model/feature'
import { DataService } from './data.service'
import { Effects } from './effects'
import { reducer } from './reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Data, reducer),
    EffectsModule.forFeature([Effects])
  ],
  providers: [
    DataService
  ]
})
export class DataModule { }
