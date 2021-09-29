import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from './facade.service';
import { OrderService } from './order.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    OrderService,

    FacadeService
  ]
})
export class ServicesModule { }
