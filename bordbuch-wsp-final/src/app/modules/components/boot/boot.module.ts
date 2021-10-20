import { NgModule } from '@angular/core';
import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';
import { ShipResolver } from 'src/app/store/ship-store/ship.resolver';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { KatModule } from 'src/app/store/kat-store/kat.module';
import { DataModule } from 'src/app/store/positionreport-store/data.module';
import { ZaehlerstandModule } from 'src/app/store/zaehlerstand-store/data.module';
import { MapComponent } from './map/map.component';
import { StreifeComponent } from './streife/streife.component';
import { StreifeModule } from './streife/streife.module';

export const routes: Routes = [
  { path: ':id', component: BootComponent,
    children: [
      { path: '', component: StreifeComponent, resolve: { data: ShipResolver }, data: { param: 'id'}},
      { path: 'map', component: MapComponent },
      { path: 'positions', loadChildren: () => import('./positions/positions.module').then(m => m.PositionsModule) }
    ],
  }
]

@NgModule({
  declarations: [
    BootComponent,
    MapComponent,
  ],
  imports: [
    SharedModule,

    // router
    StreifeModule,
    RouterModule.forChild(routes),

    // store
    DataModule,
    KatModule,
    ShipModule,
    ZaehlerstandModule
  ],
  providers: [
    ShipResolver
  ]
})
export class BootModule { }
