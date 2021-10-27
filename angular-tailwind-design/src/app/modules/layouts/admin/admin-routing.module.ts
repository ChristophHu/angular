import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from 'src/app/core/models/role';
import { BetankungenComponent } from '../../components/betankungen/betankungen.component';
import { KontaktComponent } from '../../components/kontakt/kontakt.component';
import { LeafletMapComponent } from '../../components/map/leaflet-map/leaflet-map.component';
import { ReparaturenServiceComponent } from '../../components/reparaturen-service/reparaturen-service.component';
import { StreifenComponent } from '../../components/streifen/streifen.component';
import { VerwaltungVonDienststellenComponent } from '../../components/verwaltung/verwaltung-von-dienststellen/verwaltung-von-dienststellen.component';
import { VerwaltungVonPruefvermerkKatComponent } from '../../components/verwaltung/verwaltung-von-pruefvermerk-kat/verwaltung-von-pruefvermerk-kat.component';
import { VerwaltungVonPruefvermerkenComponent } from '../../components/verwaltung/verwaltung-von-pruefvermerken/verwaltung-von-pruefvermerken.component';
import { VerwaltungVonSchiffenComponent } from '../../components/verwaltung/verwaltung-von-schiffen/verwaltung-von-schiffen.component';
import { ZaehlerstaendeComponent } from '../../components/zaehlerstaende/zaehlerstaende.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'map', loadChildren: () => import('src/app/modules/components/map/leaflet-map/leaflet-map.module').then( m => m.LeafletMapModule ) },
      { path: 'streifen', component: StreifenComponent },
      { path: 'betankungen', component: BetankungenComponent },
      { path: 'zaehlerstaende', component: ZaehlerstaendeComponent },
      { path: 'service', component: ReparaturenServiceComponent },
      { path: 'dienststellenverwaltung', component: VerwaltungVonDienststellenComponent },
      { path: 'pruefvermerkeverwaltung', component: VerwaltungVonPruefvermerkenComponent },
      { path: 'katpruefvermerkeverwaltung', component: VerwaltungVonPruefvermerkKatComponent },
      { path: 'schiffeverwaltung', component: VerwaltungVonSchiffenComponent },
      { path: 'kontakt', component: KontaktComponent },

      { path: '', component: LeafletMapComponent },
    ], data: { roles: [Role.administration] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
