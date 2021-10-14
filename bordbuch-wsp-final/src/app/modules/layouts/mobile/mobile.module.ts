import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import { BordbuchAuswahlModule } from '../../components/bordbuch-auswahl/bordbuch-auswahl.module';

@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    BordbuchAuswahlModule
  ]
})
export class MobileModule { }
