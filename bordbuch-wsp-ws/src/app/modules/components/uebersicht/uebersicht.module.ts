import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlotlyModule } from 'projects/plotly/src/public-api';
import * as PlotlyJS from 'plotly.js-dist-min';

import { SharedModule } from 'src/app/shared/shared.module';
import { UebersichtComponent } from './uebersicht.component';
import { BooteKlarmeldungComponent } from './boote-klarmeldung/boote-klarmeldung.component';
import { DienststellenKlarmeldungComponent } from './dienststellen-klarmeldung/dienststellen-klarmeldung.component';
import { AusfallzeitenComponent } from './ausfallzeiten/ausfallzeiten.component';

PlotlyModule.plotlyjs = PlotlyJS;

// PlotlyViaCDNModule.setPlotlyVersion('1.55.2'); // can be `latest` or any version number (i.e.: '1.40.0')
// PlotlyViaCDNModule.setPlotlyBundle('basic'); // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'

const routes: Routes = [
  { path: '', component: UebersichtComponent }
]
@NgModule({
  declarations: [
    UebersichtComponent,
    BooteKlarmeldungComponent,
    DienststellenKlarmeldungComponent,
    AusfallzeitenComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    PlotlyModule
  ]
})
export class UebersichtModule { }
