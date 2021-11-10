import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';

const routes: Routes = [
  { path: '', component: MobileComponent,
    children: [
      { path: '', loadChildren: () => import('../../components/boot-auswahl/boot-auswahl.module').then(m => m.BootAuswahlModule) },
      { path: 'boot', loadChildren: () => import('../../components/boot/boot.module').then(m => m.BootModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
