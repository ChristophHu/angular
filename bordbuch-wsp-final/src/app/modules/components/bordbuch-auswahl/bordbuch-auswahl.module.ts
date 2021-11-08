import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { BordbuchAuswahlComponent } from './bordbuch-auswahl.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { SharedModule } from 'src/app/shared/shared.module';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { ShipSelectionResolver } from 'src/app/store/ship-selection-store/ship-selection.resolver';
import { ShipSelectionModule } from 'src/app/store/ship-selection-store/ship-selection.module';
import { KatResolver } from 'src/app/store/kat-store';
import { TopnavModule } from 'src/app/core/navbar/topnav/topnav.module';

export const dataRoutes: Routes = [
  { path: '', component: BordbuchAuswahlComponent, resolve: { data: ShipSelectionResolver }}
]

@NgModule({
  declarations: [
    BordbuchAuswahlComponent,
    QrscannerComponent
  ],
  imports: [
    SharedModule,
    TopnavModule,

    // npm pkg
    NgQrScannerModule,

    // routes
    RouterModule.forChild(dataRoutes),

    // store
    ShipSelectionModule
  ],
  providers: [
    // KatResolver.Resolver,
    ShipSelectionResolver,
    AppService
  ]
})
export class BordbuchAuswahlModule { }
