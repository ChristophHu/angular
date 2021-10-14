import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BordbuchAuswahlComponent } from '../../components/bordbuch-auswahl/bordbuch-auswahl.component';
import { MobileComponent } from './mobile.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('../../components/bordbuch-auswahl/bordbuch-auswahl.module').then(m => m.BordbuchAuswahlModule) }
    // children: [
    //   { path: 'boot/:id', component: BootComponent },
    //   { path: 'boot/:id/map', component: MapComponent },
    //   { path: 'boot/:id/positions', component: PositionenComponent },

    //   // { path: '**', redirectTo: '' }
    // ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
