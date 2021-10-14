import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShipResolver } from './state/ship.resolver';
import { AppService } from './service/app.service';
import { shipReducer } from './state/ship.reducers';
import { BordbuchAuswahlComponent } from './bordbuch-auswahl.component';
import { ShipEffects } from './state/ship.effects';

export const dataRoutes: Routes = [
  { path: '', component: BordbuchAuswahlComponent, resolve: { data : ShipResolver }}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataRoutes),
    StoreModule.forFeature('ship', shipReducer),
    EffectsModule.forFeature([ShipEffects])
  ],
  declarations: [
    BordbuchAuswahlComponent
  ],
  providers: [
    ShipResolver,
    AppService
  ]
})
export class BordbuchAuswahlModule { }
