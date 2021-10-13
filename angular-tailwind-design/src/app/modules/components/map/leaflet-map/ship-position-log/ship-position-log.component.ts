import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable, Subject, Subscription } from 'rxjs'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { Position } from 'src/app/core/models/position'
import { PositionLogEntry } from '../../../../../core/models/positionlogentry'
import { MapService } from '../../../../../core/services/map.service'
import { PositionComponent } from '../position/position.component'
import { Standort } from 'src/app/core/models/standort'

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
  lastPositions: Observable<Standort[]>
  // subscription!: Subscription
  private positionSubscription = new Subscription

  // route
  id_ship: string = ''
  id_streife: string = ''
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private mapService: MapService, private modalService: ModalService<PositionComponent>) {
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
          (params: Params) => this.id_ship = params['id']
        )
      )
      .add(
        this.mapService.lastPositions.subscribe(data => {
          this.id_streife = data[1].id_streife!
          this.dtTrigger.next()
        })
      )
    
    this.mapService.getPosition(this.id_ship)

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

  async showModal(id_ship: string, id_streife: string, id_entry?: string): Promise<void> {
    let position: Standort | undefined
    
    const { PositionComponent } = await import(
      '../position/position.component'
    );

    if (id_entry) {
      position = this.mapService._dataStore.lastPositions.find((el: any) => el.id == id_entry)
      console.log(position)
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position bearbeiten',
          position
        }
      });
    } else {
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position hinzufügen',
          position: { id_ship: id_ship, id_streife: id_streife, date: new Date(), location: { latitude: 0, longitude: 0}, description: ''}          
        }
      });
    }
  }
}
