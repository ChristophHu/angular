import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { KatModule } from 'src/app/store/kat-store/kat.module';
import { Resolver } from 'src/app/store/resolver';
import { ControllingComponent } from '../../components/controlling/controlling.component';
import { UebersichtComponent } from '../../components/uebersicht/uebersicht.component';
import { WsComponent } from './ws.component';

const routes: Routes = [
  { path: '', component: WsComponent, resolve: { data: Resolver },
    children: [
      { path: '', component: UebersichtComponent },
      { path: 'controlling', loadChildren: () => import('../../components/controlling/controlling.module').then( m => m.ControllingModule ) },
      { path: 'streifen', loadChildren: () => import('../../components/streifen/streifen.module').then( m => m.StreifenModule ) },
      { path: 'service', loadChildren: () => import('../../components/service/service.module').then( m => m.ServiceModule ) },
      { path: 'verwaltung', loadChildren: () => import('../../components/verwaltung/verwaltung.module').then( m => m.VerwaltungModule ) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    KatModule
  ],
  exports: [RouterModule],
  providers: [
    Resolver,
    KatFacade,
    AppService
  ]
})
export class WsRoutingModule { }
