import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { data } from 'jquery'
import * as L from 'leaflet'
import { Observable, Subject, Subscription } from 'rxjs'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { Position } from 'src/app/core/models/position'
import { PunktSetzenComponent } from '../../punkt-setzen/punkt-setzen.component'
import { PositionLogEntry } from '../../../../../core/models/positionlogentry'
import { MapService } from '../../../../../core/services/map.service'

@Component({
  selector: 'app-ship-position-log',
  templateUrl: './ship-position-log.component.html',
  styleUrls: ['./ship-position-log.component.sass']
})
export class ShipPositionLogComponent implements OnInit, OnDestroy {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  lastPositions: Observable<PositionLogEntry[]>
  // subscription!: Subscription
  private positionSubscription = new Subscription

  // route
  id: string = ''
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private mapService: MapService, private modalService: ModalService<PunktSetzenComponent>) {
    this.lastPositions = this.mapService.lastPositions
  }

  ngOnInit(): void {
    // datatables
    this.dtOptions = { 
      pagingType: 'full_numbers', 
      pageLength: 10, 
      responsive: true, 
      // "paging"  : false,
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      "autoWidth": true,
      // "retrieve": true,
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
    this.positionSubscription
      .add(
        this.activatedRoute.params.subscribe(
          (params: Params) => this.id = params['id']
        )
      )
      .add(
        this.mapService.lastPositions.subscribe(data => {
          this.dtTrigger.next()
        })
      )
    
    this.mapService.getPosition()

    // this.updateDataToDatatable()
  }

  ngOnDestroy(): void {
    this.positionSubscription.unsubscribe()
  }

  // updateDataToDatatable() {
  //   var shipIcon = new L.Icon({ iconUrl: 'assets/location-marker.svg', iconSize: [ 50, 60 ], iconAnchor: [20, 30], popupAnchor: [0, 20] })
  //   // this.mapService.getShipPositionLog(this.id).subscribe({
  //   //   next: data => { 
  //   //     this.positionLog = data
  //   //     this.dtTrigger.next()

  //   //     let markerArray: any[] = []
  //   //     data.forEach((el: any) => {
  //   //       markerArray.push({ latitude: el.location.latitude, longitude: el.location.longitude, description: el.description, options: { icon: shipIcon } })
  //   //     })
  //   //     this.mapService.addMarkerToGroup(markerArray)
  //   //   }
  //   // })
  // }

  centerOnPosition(position: Position) {
    // this.mapService.sub$.next(position)
  }

  getPositionLog() {
    // return this.positionLog
  }

  async showModal(id_ship: number, id_entry?: number): Promise<void> {
    let title: string = id_entry ? 'Position bearbeiten' : 'Position hinzufügen'
    
    const { PunktSetzenComponent } = await import(
      '../../punkt-setzen/punkt-setzen.component'
    );

    if (id_entry) {
      // Position bearbeiten
      this.modalService.open(PunktSetzenComponent, {
        data: {
          title: title,
          id_ship: id_ship,
          id_entry: id_entry
        }
      });
    } else {
      // Position setzen
      this.modalService.open(PunktSetzenComponent, {
        data: {
          title: title,
          id_ship: id_ship
        }
      });
    }
  }

}
