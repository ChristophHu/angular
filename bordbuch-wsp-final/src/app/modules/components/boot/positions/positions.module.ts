import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PositionComponent } from './position/position.component';
import { PositionsComponent } from './positions.component';


@NgModule({
  declarations: [
    PositionsComponent,
    PositionComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PositionsModule { }
