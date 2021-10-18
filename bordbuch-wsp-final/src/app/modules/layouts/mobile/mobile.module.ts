import { NgModule } from '@angular/core';
import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import { BordbuchAuswahlModule } from '../../components/bordbuch-auswahl/bordbuch-auswahl.module';
import { SharedModule } from 'src/app/shared/shared.module';


// import { BootComponent } from '../../components/boot/boot.component';

@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    SharedModule,
    MobileRoutingModule,
    BordbuchAuswahlModule,
  ]
})
export class MobileModule { }
