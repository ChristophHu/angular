import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { data } from 'jquery'
import * as L from 'leaflet'
import { Subject, Subscription } from 'rxjs'
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
  
  // route
  private subscription!: Subscription
  id: number = 0
  
  // data
  private positionLog: PositionLogEntry[] = []

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private mapService: MapService, private modalService: ModalService<PunktSetzenComponent>) { }

  ngOnInit(): void {
    // route
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => this.id = params['id']
    )

    // datatables
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 8 }
    this.updateDataToDatatable()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.dtTrigger.unsubscribe()
  }

  updateDataToDatatable() {
    var shipIcon = new L.Icon({ iconUrl: 'assets/location-marker.svg', iconSize: [ 50, 60 ], iconAnchor: [20, 30], popupAnchor: [0, 20] })
    // this.mapService.getShipPositionLog(this.id).subscribe({
    //   next: data => { 
    //     this.positionLog = data
    //     this.dtTrigger.next()

    //     let markerArray: any[] = []
    //     data.forEach((el: any) => {
    //       markerArray.push({ latitude: el.location.latitude, longitude: el.location.longitude, description: el.description, options: { icon: shipIcon } })
    //     })
    //     this.mapService.addMarkerToGroup(markerArray)
    //   }
    // })
  }

  centerOnPosition(position: Position) {
    // this.mapService.sub$.next(position)
  }

  getPositionLog() {
    return this.positionLog
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
