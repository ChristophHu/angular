import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';

const routes: Routes = [
  { path: '', component: MobileComponent,
    // children: [
    //   { path: 'boot/:id', component: BootComponent },
    //   { path: 'boot/:id/map', component: MapComponent },
    //   { path: 'boot/:id/positions', component: PositionenComponent },

    //   // { path: '**', redirectTo: '' }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
