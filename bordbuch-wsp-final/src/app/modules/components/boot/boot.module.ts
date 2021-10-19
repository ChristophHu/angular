import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';
import { ShipResolver } from 'src/app/store/ship-store/ship.resolver';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { _actionTypeUniquenessCheck } from '@ngrx/store/src/runtime_checks';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  { path: '', component: BootComponent,
    children: [
      { path: ':id', component: BootComponent, resolve: { data : ShipResolver }, data: { param: 'id'} },
      // { path: ':id/map', component: MapComponent },
      // { path: 'boot/:id/positions', component: PositionenComponent },

      // { path: '**', redirectTo: '' }
    ],
  }
]

@NgModule({
  declarations: [
    BootComponent
  ],
  imports: [
    SharedModule,

    // router
    RouterModule.forChild(routes),

    // store
    ShipModule
  ],
  providers: [
    ShipResolver
  ]
})
export class BootModule { }
