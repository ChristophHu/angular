import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapService } from '../../../../core/services/map.service';
import { ShipPositionComponent } from './ship-position/ship-position.component';
import { ShipPositionLogComponent } from './ship-position-log/ship-position-log.component';
import { LeafletMapRoutingModule } from './leaflet-map-routing.module';
import { LeafletMapComponent } from './leaflet-map.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    LeafletMapComponent,
    ShipPositionComponent,
    ShipPositionLogComponent
  ],
  imports: [
    CommonModule,
    LeafletMapRoutingModule,
    DataTablesModule
  ],
  providers: [
    MapService
  ]
})
export class LeafletMapModule { }
