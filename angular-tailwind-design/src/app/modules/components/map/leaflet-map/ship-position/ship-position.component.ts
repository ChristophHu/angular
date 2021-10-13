import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subject, Subscription } from 'rxjs';
import { Betankung } from 'src/app/core/models/betankung';
import { Position } from 'src/app/core/models/position';
import { Standort } from 'src/app/core/models/standort';
import { BetankungService } from 'src/app/core/services/betankung.service';
import { PositionLogEntry } from '../../../../../core/models/positionlogentry';
import { MapService } from '../../../../../core/services/map.service';

@Component({
  selector: 'app-ship-position',
  templateUrl: './ship-position.component.html',
  styleUrls: ['./ship-position.component.sass']
})
export class ShipPositionComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  lastPositions: Observable<Standort[]>
  subscription!: Subscription
  // betankungen: Observable<Betankung[]>
  // subscription!: Subscription

  constructor(private mapService: MapService,) {
    this.lastPositions = this.mapService.lastPositions
  }

  ngOnInit(): void {
    // datatables
    this.dtOptions = {
      // paging: false,
      pagingType: 'full_numbers', 
      pageLength: 10, 
      responsive: true, 
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      "autoWidth": true,
      retrieve: true,
      // data:this.dtUsers,
      // columns: [{title: 'User ID', data: 'id'},
      //       {title: 'First Name', data: 'firstName'},
      //       {title: 'Last Name', data: 'lastName' }],
      "language": {
        // "processing": "Procesando...",
        "search": "Suche:",
        "lengthMenu": "Anzeigen von _MENU_ Elementen pro Seite",
        "info": "Anzeige von _START_ bis _END_ von _TOTAL_ Elementen",
        // "infoEmpty": "Mostrando ningún elemento.",
        // "infoFiltered": "(filtrado _MAX_ elementos total)",
        // "infoPostFix": "",
        // "loadingRecords": "Cargando registros...",
        // "zeroRecords": "No se encontraron registros",
        "emptyTable": "Keine Datensätze vorhanden",
        "paginate": {
          "first": "Erste",
          "previous": "Vorherige",
          "next": "Nächste",
          "last": "Letzte"
        },
      }
    }
    // data
    this.subscription = this.mapService.lastPositions.subscribe(data => {
      this.dtTrigger.next()
    })

    this.mapService.getLastPositionsFromAllShips()
  }

  // updateDataToDatatable() {
  //   var shipIcon = new L.Icon({ iconUrl: 'assets/sea-ship-svgrepo-com.svg', iconSize: [ 50, 60 ], iconAnchor: [20, 30], popupAnchor: [0, 20] })

  //   // this.mapService.getLastShipPositions().subscribe(data => {
  //   //   this.positionLog = data
  //   //   this.dtTrigger.next()

  //   //   let markerArray: any[] = []
  //   //   data.forEach((el: any) => {
  //   //     markerArray.push({ latitude: el.location.latitude, longitude: el.location.longitude, description: el.description, options: { icon: shipIcon } })
  //   //   })
  //   //   this.mapService.addMarkerToGroup(markerArray)
  //   // })
  //   this.dtTrigger.next()
  // }

  centerOnShipPosition(position: Position) {
    this.mapService.centerposition.next(position)
  }
}
