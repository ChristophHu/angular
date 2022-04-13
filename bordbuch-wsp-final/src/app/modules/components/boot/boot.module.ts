import { NgModule } from '@angular/core';
import { BootComponent } from './boot.component';
import { RouterModule, Routes } from '@angular/router';
import { ShipResolver } from 'src/app/store/ship-store/ship.resolver';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapComponent } from './map/map.component';
import { StreifeComponent } from './streife/streife.component';
import { StreifeModule } from './streife/streife.module';
import { PositionsComponent } from './positions/positions.component';
import { ShipSelectionResolver } from 'src/app/store/ship-selection-store/ship-selection.resolver';
import { AppService } from 'src/app/core/services/app.service';
import { ShipSelectionModule } from 'src/app/store/ship-selection-store/ship-selection.module';
import { MapModule } from './map/map.module';
import { PositionsModule } from './positions/positions.module';
import { SpecModule } from 'src/app/store/spec-store/spec.module';
import { PdfBerichtComponent } from './pdf-bericht/pdf-bericht.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-bericht/pdf-viewer/pdf-viewer.component';
import { PositionService } from 'src/app/core/services/position.service';

export const routes: Routes = [
  { path: ':id', component: BootComponent, data: { param: 'id'}, resolve: { data: ShipResolver },
    children: [
      { path: '', component: StreifeComponent },
      { path: 'map', component: MapComponent },
      { path: 'pdfbericht', component: PdfBerichtComponent },
      { path: 'positions', component: PositionsComponent }
    ],
  }
]

@NgModule({
  declarations: [
    BootComponent,
    PdfBerichtComponent,
    PdfViewerComponent
  ],
  imports: [
    StreifeModule,
    MapModule,
    PositionsModule,
    SharedModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,

    // router
    RouterModule.forChild(routes),

    // store
    ShipSelectionModule,
    ShipModule,
    SpecModule
  ],
  providers: [
    ShipSelectionResolver,
    ShipResolver,
    PositionService,
    AppService
  ]
})
export class BootModule { }
