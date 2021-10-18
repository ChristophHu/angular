import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: BootComponent,
    // children: [
    //   { path: 'boot/:id', component: BootComponent },
    //   // { path: 'boot/:id/map', component: MapComponent },
    //   // { path: 'boot/:id/positions', component: PositionenComponent },

    //   // { path: '**', redirectTo: '' }
    // ]
  } //, resolve: { data : ShipResolver }}
]

@NgModule({
  declarations: [
    BootComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BootModule { }
