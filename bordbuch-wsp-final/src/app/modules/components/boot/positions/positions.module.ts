import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PositionComponent } from './position/position.component';
import { PositionsComponent } from './positions.component';
import { MapComponent } from './position/map/map.component';


@NgModule({
  declarations: [
    PositionsComponent,
    PositionComponent,
    MapComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PositionsModule { }
