import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletMapComponent } from './leaflet-map.component';
import { ShipPositionLogComponent } from './ship-position-log/ship-position-log.component';
import { ShipPositionComponent } from './ship-position/ship-position.component';

const routes: Routes = [
    { path: '', component: LeafletMapComponent,
        children: [
            { path: 'shipposition', component: ShipPositionComponent },
            { path: 'shippositionlog', component: ShipPositionLogComponent },
            { path: 'shippositionlog/:id', component: ShipPositionLogComponent }, // localhost:4200/map/1/shippositionlog
            { path: '', redirectTo: 'shipposition', pathMatch: 'full' }
        ]
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LeafletMapRoutingModule { }
