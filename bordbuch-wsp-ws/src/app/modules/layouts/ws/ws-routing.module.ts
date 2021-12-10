import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllingComponent } from '../../components/controlling/controlling.component';
import { UebersichtComponent } from '../../components/uebersicht/uebersicht.component';
import { WsComponent } from './ws.component';

const routes: Routes = [
  { path: '', component: WsComponent,
    children: [
      { path: '', component: UebersichtComponent },
      { path: 'controlling', component: ControllingComponent },
      { path: 'service', loadChildren: () => import('../../components/service/service.module').then( m => m.ServiceModule ) },
      { path: 'verwaltung', loadChildren: () => import('../../components/verwaltung/verwaltung.module').then( m => m.VerwaltungModule ) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WsRoutingModule { }
