import { NgModule } from '@angular/core';
import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopnavModule } from 'src/app/core/navbar/topnav/topnav.module';
import { ShipSelectionModule } from 'src/app/store/ship-selection-store/ship-selection.module';

@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    SharedModule,
    MobileRoutingModule,
    TopnavModule,
  ]
})
export class MobileModule { }
