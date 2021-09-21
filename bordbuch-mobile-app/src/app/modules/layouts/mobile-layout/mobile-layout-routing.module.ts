import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from '../../components/boot/boot.component';
import { MapComponent } from '../../components/map/map.component';
import { PositionenComponent } from '../../components/positionen/positionen.component';
import { MobileLayoutComponent } from './mobile-layout.component';

const routes: Routes = [
  { path: '', component: MobileLayoutComponent,
    children: [
      { path: 'boot/:id', component: BootComponent },
      { path: 'boot/:id/map', component: MapComponent },
      { path: 'boot/:id/positions', component: PositionenComponent },

      // { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileLayoutRoutingModule { }
