import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShipResolver } from './state/ship.resolver';
import { AppService } from '../../../core/services/app.service';
import { shipReducer } from './state/ship.reducers';
import { BordbuchAuswahlComponent } from './bordbuch-auswahl.component';
import { ShipEffects } from './state/ship.effects';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { SharedModule } from 'src/app/shared/shared.module';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { Features } from 'src/app/core/model/feature';

export const dataRoutes: Routes = [
  { path: '', component: BordbuchAuswahlComponent, resolve: { data : ShipResolver }}
]

@NgModule({
  declarations: [
    BordbuchAuswahlComponent,
    QrscannerComponent
  ],
  imports: [
    SharedModule,

    // npm pkg
    NgQrScannerModule,
    NgSelectModule,

    RouterModule.forChild(dataRoutes),
    StoreModule.forFeature(Features.Ship, shipReducer),
    EffectsModule.forFeature([ShipEffects])
  ],
  providers: [
    ShipResolver,
    AppService
  ]
})
export class BordbuchAuswahlModule { }
