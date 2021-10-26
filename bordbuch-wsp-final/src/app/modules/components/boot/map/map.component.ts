import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable, ReplaySubject, Subscription } from 'rxjs';
import { Position } from 'src/app/core/model/position';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { logout } from 'src/app/modules/auth/state/actions';
import { RootStoreState } from 'src/app/store/root-store.state';

import * as L from 'leaflet'
import { LocationService } from 'src/app/core/services/location.service';
import { AppService } from 'src/app/core/services/app.service';
import { PositionSelectors } from 'src/app/store/positionreport-store';
import { LastPositionSelectors } from 'src/app/store/lastposition-store';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionComponent } from '../positions/position/position.component';
import { ShipSelectors } from 'src/app/store/ship-store';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  id_ship!: string | undefined
  name!: string | undefined
  id_streife!: string | undefined
  
  // view
  public positionToggle: boolean = true
  public allPositionToggle: boolean = true

  // leaflet
  private map!: L.Map
  private positionSource$ = new ReplaySubject<Position>(2)

  // positionForm: FormGroup
  private positionSubscription = new Subscription
  private currentPositionSubscription = new Subscription
  
  private positions: PositionReport[] = []
  private markergroup: any
  private arr: L.Marker[] = []

  // Position from all ships
  private allShips: L.Marker[] = []
  private allShippsGroup: L.LayerGroup = L.layerGroup()

  private positions$: Observable<PositionReport[] | undefined>
  private lastPositions$: Observable<PositionReport[] | undefined>

  constructor(private store: Store<RootStoreState>, private appService: AppService, private locationService: LocationService, private modalService: ModalService<PositionComponent>) {
    this.positions$ = this.store.pipe(select(PositionSelectors.selectAllData))
    this.lastPositions$ = this.store.pipe(select(LastPositionSelectors.selectAllData))
  }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      this.id_ship = ship?.id
      this.name = ship?.name
    })


    this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) this.id_streife = id_streife
    })

    this.positionSubscription
      .add(
        this.positions$.subscribe((data: any) => {
          this.positions = []
          this.positions = data
          data.forEach((pos: PositionReport, index: number) => {

            var svgIcon = L.divIcon({
              html: `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
                <path fill="#414141" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
                <g>
                  <circle fill="#FFF" cx="74" cy="75" r="48"/>
                  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="64" fill="#000">${index+1}</text>
                </g>
              </svg>
              `,
              className: "svg-icon",
              iconSize: [24, 40],
              iconAnchor: [12, 40],
              popupAnchor: [12, -40]
            });

            this.arr.push(L.marker([pos.location.latitude, pos.location.longitude], { icon: svgIcon }).bindPopup(`Beschreibung: ${pos.description}<br>Datum: ${pos.date}`))
          })
          this.markergroup = L.layerGroup(this.arr)
        })
      )
      .add(
        this.lastPositions$.subscribe((data: any) => {
          this.allShips.length = 0
          data.forEach((ship: any) => {
            var svgIcon = L.divIcon({
              html: `
              <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
                  <path fill="#4287f5" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
                  <g>
                    <circle fill="#FFF" cx="74" cy="75" r="48"/>
                    <svg x="22%" y="20%" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
                      <path d="M4 18l-1 -5h18l-2 4" />
                      <path d="M5 13v-6h8l4 6" />
                      <path d="M7 7v-4h-1" />
                    </svg>
                  </g>
                </svg>
                <p class="absolute -left-5 p-1 text-center bg-gray-200 text-base bg-opacity-60 whitespace-nowrap">${ship.name}</p>
              </div>
              
              `,
              className: "svg-icon",
              iconSize: [24, 40],
              iconAnchor: [12, 40],
              popupAnchor: [12, -40]
            });
            this.allShips.push(L.marker([ship.location.latitude, ship.location.longitude], { icon: svgIcon }).bindPopup(`Datum: ${ship.date}`))
          })
          if (this.map && this.allShips.length > 0) {
            this.map.removeLayer(this.allShippsGroup)
            this.allShippsGroup = L.layerGroup(this.allShips)
          }
        })
      )
    
    L.Icon.Default.imagePath = "assets/leaflet/"

    this.cposition()
  }

  ngAfterViewInit(): void {
    this.createMap()
    this.setToLocalPosition()
    // this.markergroup.addTo(this.map)
    // this.allShippsGroup.addTo(this.map)
  }

  toggleAllShips() {
    if (this.allPositionToggle) {
      console.log('show')
      this.allPositionToggle = false
      this.allShippsGroup.addTo(this.map)
    } else {
      console.log('hide')
      this.allPositionToggle = true
      this.allShippsGroup.remove()
    }
  }

  toggleMarkergroup() {
    if (this.positionToggle) {
      this.positionToggle = false
      this.markergroup.addTo(this.map)
    } else {
      this.positionToggle = true
      this.markergroup.remove()
    }
  }

  logout() {
    this.store.dispatch(logout())
  }

  createMap() {
	  const zoom = 12
  
	  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.positionSource$.next({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      })
	  }
		  
	  this.map = L.map('map', {
		center: [52.5, 13.3],
		zoom: zoom,
		zoomControl: false
	  })
  
	  // Layer: OpenStreetMap
	  var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  });
	  OpenStreetMap_Mapnik.addTo(this.map)
  
	  // Layer: OpenSeaMap
	  var OpenSeaMap = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
	  });
	  OpenSeaMap.addTo(this.map)
	}

  cposition() {
    var svgIcon = L.divIcon({
      html: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
        <path fill="#f55660" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
        <g>
          <circle fill="#FFF" cx="74" cy="75" r="48"/>
          <svg x="22%" y="20%" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
            <path d="M4 18l-1 -5h18l-2 4" />
            <path d="M5 13v-6h8l4 6" />
            <path d="M7 7v-4h-1" />
          </svg>
        </g>
      </svg>
      `,
      className: "svg-icon",
      iconSize: [24, 40],
      iconAnchor: [12, 40],
      popupAnchor: [12, -40]
    });

    this.currentPositionSubscription = interval(10*1000).subscribe((data: number) => {
        this.locationService.getCurrentPosition().then(position => {
          const Pos = L.layerGroup([L.marker([position.latitude, position.longitude], { icon: svgIcon}).bindPopup('Aktuelle Position')])
          Pos.remove()
          Pos.addTo(this.map)
        })
    })
  }

  centerMapOnPosition(position: Position) {
	  this.map.panTo(new L.LatLng( position.latitude, position.longitude ))
	}

  setToLocalPosition() {
	  this.positionSource$.subscribe({
      next: (pos: Position) => {
        this.map.panTo(new L.LatLng(pos.latitude, pos.longitude))
      },
      error: err => console.log(`error: ${err}`),
      complete: () => console.log(`complete`)
	  })
	}

  async openPositionModal() {
    console.log('open')
    let position: PositionReport | undefined

    const { PositionComponent } = await import(
      '../positions/position/position.component'
    )

    this.locationService.getCurrentPosition().then((data: any) => {
      position = { id_ship: this.id_ship!, id_streife: this.id_streife, date: new Date().toISOString(), location: {latitude: data.latitude, longitude: data.longitude }, description: ''}
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position hinzufügen',
          position
        }
      })
    }, error => console.error(error))
  }
}
