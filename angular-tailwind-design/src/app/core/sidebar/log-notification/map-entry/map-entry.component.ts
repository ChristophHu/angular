import { Component, Input, OnInit } from '@angular/core';
import { Position } from 'src/app/core/models/position';
import { MapService } from 'src/app/core/services/map.service';
import { Map } from 'src/app/core/models/map';

@Component({
  selector: 'app-map-entry',
  templateUrl: './map-entry.component.html',
  styleUrls: ['./map-entry.component.sass']
})
export class MapEntryComponent implements OnInit {
  @Input() entry: Map = { who: '', when: new Date(), what: '', where: { latitude: 0, longitude: 0 } }

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  centerOnPosition(position: Position) {
    console.log(position)
    // this.mapService.sub$.next(position)
  }
}
