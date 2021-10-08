import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { PositionLogEntry } from '../../../../../core/models/positionlogentry';
import { MapService } from '../../../../../core/services/map.service';

@Component({
  selector: 'app-ship-position',
  templateUrl: './ship-position.component.html',
  styleUrls: ['./ship-position.component.sass']
})
export class ShipPositionComponent implements OnInit {
  // data
  private positionLog: PositionLogEntry[] = []
  
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    // datatables
    this.dtOptions
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 8 , language: { url: 'cdn.datatables.net/plug-ins/1.10.25/i18n/German.json' }}
    this.updateDataToDatatable()
  }

  updateDataToDatatable() {
    var shipIcon = new L.Icon({ iconUrl: 'assets/sea-ship-svgrepo-com.svg', iconSize: [ 50, 60 ], iconAnchor: [20, 30], popupAnchor: [0, 20] })

    // this.mapService.getLastShipPositions().subscribe(data => {
    //   this.positionLog = data
    //   this.dtTrigger.next()

    //   let markerArray: any[] = []
    //   data.forEach((el: any) => {
    //     markerArray.push({ latitude: el.location.latitude, longitude: el.location.longitude, description: el.description, options: { icon: shipIcon } })
    //   })
    //   this.mapService.addMarkerToGroup(markerArray)
    // })
  }

  getPositionLog() {
    return this.positionLog
  }

  centerOnShipPosition(id: number) {
    let position!: Position
    this.positionLog.find((el) => {
      if (el.id == id) {
        position = el.location
      }
    })
    // this.mapService.sub$.next(position)
  }
}
