import { NgModule } from '@angular/core';
import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';
import { ShipResolver } from 'src/app/store/ship-store/ship.resolver';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataModule } from 'src/app/store/positionreport-store/data.module';
import { ZaehlerstandModule } from 'src/app/store/zaehlerstand-store/data.module';
import { MapComponent } from './map/map.component';
import { StreifeComponent } from './streife/streife.component';
import { StreifeModule } from './streife/streife.module';
import { PositionsComponent } from './positions/positions.component';
import { LastPositionModule } from 'src/app/store/lastposition-store/data.module';
import { ShipSelectionResolver } from 'src/app/store/ship-selection-store/ship-selection.resolver';
import { AppService } from 'src/app/core/services/app.service';
import { ShipSelectionModule } from 'src/app/store/ship-selection-store/ship-selection.module';

export const routes: Routes = [
  { path: ':id', component: BootComponent, resolve: { data: ShipResolver }, data: { param: 'id'},
    children: [
      { path: '', component: StreifeComponent},
      { path: 'map', component: MapComponent },
      { path: 'positions', component: PositionsComponent }
    ],
  }
]

@NgModule({
  declarations: [
    BootComponent,
    MapComponent,
    PositionsComponent
  ],
  imports: [
    SharedModule,

    // router
    StreifeModule,
    RouterModule.forChild(routes),

    // store
    DataModule,
    LastPositionModule,
    ShipSelectionModule,
    ShipModule,
    ZaehlerstandModule
  ],
  providers: [
    ShipSelectionResolver,
    ShipResolver,
    AppService
  ]
})
export class BootModule { }
