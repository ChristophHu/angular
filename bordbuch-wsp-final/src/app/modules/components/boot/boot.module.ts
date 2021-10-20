import { NgModule } from '@angular/core';
import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';
import { ShipResolver } from 'src/app/store/ship-store/ship.resolver';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { KatModule } from 'src/app/store/kat-store/kat.module';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { BetankungComponent } from './betankung/betankung.component';
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
    //   { path: ':id', component: BootComponent, resolve: { data: ShipResolver }, data: { param: 'id'} },
    //   { path: ':id/map', component: MapComponent },
    //   // { path: 'boot/:id/positions', component: PositionenComponent },

    //   // { path: '**', redirectTo: '' }
    ],
  }
]

@NgModule({
  declarations: [
    BootComponent,
    BesatzungComponent,
    ZaehlerstandComponent,
    PruefvermerkComponent,
    BetankungComponent,
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
