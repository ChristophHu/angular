import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeitungRoutingModule } from './leitung-routing.module';
import { LeitungComponent } from '../leitung/leitung.component';


@NgModule({
  declarations: [
    LeitungComponent
  ],
  imports: [
    CommonModule,
    LeitungRoutingModule
  ]
})
export class LeitungModule { }
