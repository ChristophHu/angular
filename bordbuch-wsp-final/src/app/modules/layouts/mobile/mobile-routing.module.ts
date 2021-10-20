import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../../components/bordbuch-auswahl/bordbuch-auswahl.module').then(m => m.BordbuchAuswahlModule) },
  { path: 'boot', loadChildren: () => import('../../components/boot/boot.module').then(m => m.BootModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
