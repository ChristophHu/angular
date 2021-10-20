import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';
import { ShipResolver } from 'src/app/store/ship-store/ship.resolver';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { _actionTypeUniquenessCheck } from '@ngrx/store/src/runtime_checks';
import { SharedModule } from 'src/app/shared/shared.module';
import { KatModule } from 'src/app/store/kat-store/kat.module';
import { KatResolver } from 'src/app/store/kat-store';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { BetankungComponent } from './betankung/betankung.component';
import { PositionModule } from 'src/app/store/position-store/position.module';
import { DataModule } from 'src/app/store/data-store/data.module';

export const routes: Routes = [
  { path: '', component: BootComponent,
    children: [
      { path: ':id', component: BootComponent, resolve: { data: ShipResolver }, data: { param: 'id'} },
      // { path: ':id/map', component: MapComponent },
      // { path: 'boot/:id/positions', component: PositionenComponent },

      // { path: '**', redirectTo: '' }
    ],
  }
]

@NgModule({
  declarations: [
    BootComponent,
    BesatzungComponent,
    ZaehlerstandComponent,
    PruefvermerkComponent,
    BetankungComponent
  ],
  imports: [
    SharedModule,

    // router
    RouterModule.forChild(routes),

    // store
    DataModule,
    PositionModule,
    KatModule,
    ShipModule
  ],
  providers: [
    ShipResolver
  ]
})
export class BootModule { }
