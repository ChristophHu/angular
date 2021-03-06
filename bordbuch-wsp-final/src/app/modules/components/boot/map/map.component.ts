import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { Position } from 'src/app/core/model/position';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { logout } from 'src/app/modules/auth/state/actions';
import { RootStoreState } from 'src/app/store/root-store.state';

import * as L from 'leaflet'
import { LocationService } from 'src/app/core/services/location.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionComponent } from '../positions/position/position.component';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  id_ship!: string | undefined
  name!: string | undefined
  id_streife!: string | undefined
  
  // view
  public positionToggle: boolean = true
  public allPositionToggle: boolean = true

  // leaflet
  private map!: L.Map
  private positionSource$ = new ReplaySubject<Position>(2)

  marker_current_position: any

  private standort_marker: L.Marker[] = []
  private standort_marker_group: any
  private lastPosition_marker: L.Marker[] = []
  private lastPosition_marker_group: any

  private positions$!: Observable<PositionReport[] | undefined>
  private lastPositions$: Observable<PositionReport[] | undefined>

  constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade, private locationService: LocationService, private _katFacade: KatFacade, private modalService: ModalService<PositionComponent>) {
    this.lastPositions$ = this._katFacade.lastPositions$
  }

  ngOnInit(): void {
    this._specFacade.ship$.subscribe(ship => {
      this.id_ship = ship?.id
      this.name = ship?.name
    })

    this._specFacade.patrol$.subscribe(patrol => {
      if (patrol) {
        this.id_streife = patrol.id

        this.positions$ = this._specFacade.getPositionenByIdPatrol(patrol.id!) as Observable<PositionReport[]>

        this.lastPositions$ = this._katFacade.lastPositions$
      }
    })
    
    L.Icon.Default.imagePath = "assets/leaflet/"
  }
  ngAfterViewInit(): void {
    this.createMap()
    this.mark_current_position()

    this.positions$.subscribe(positions => {
      if (positions) this.set_standort_marker(positions)
    })
    this.lastPositions$.subscribe(positions => {
      if (positions) this.set_lastPosition_marker(positions)
    })
  }

  ngOnDestroy(): void {
    this.map.remove()
  }

  set_standort_marker(standorte: PositionReport[]) {
    this.standort_marker = []
    if (!standorte) return
    standorte.forEach((standort: PositionReport, index: number) => {
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

      this.standort_marker.push(L.marker([standort.location.latitude, standort.location.longitude], { icon: svgIcon }).bindPopup(`<u>${standort.name}</u><br><br>Datum: ${standort.date}<br>Beschreibung: ${standort.description}`))
    })
    this.standort_marker_group = L.layerGroup(this.standort_marker)
    this.standort_marker_group.addTo(this.map)
  }
  set_lastPosition_marker(standorte: PositionReport[]) {
    this.lastPosition_marker = []
    if (!standorte) return
    standorte.forEach((standort: PositionReport) => {
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
            <p class="absolute -left-5 p-1 text-center bg-gray-200 text-base bg-opacity-60 whitespace-nowrap">${standort.name}</p>
          </div>
        `,
        className: "svg-icon",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
        popupAnchor: [12, -40]
      });

      this.lastPosition_marker.push(L.marker([standort.location.latitude, standort.location.longitude], { icon: svgIcon }).bindPopup(`<u>${standort.name}</u><br><br>Datum: ${standort.date}<br>Beschreibung: ${standort.description}`))
    })
    this.lastPosition_marker_group = L.layerGroup(this.lastPosition_marker)
    this.lastPosition_marker_group.addTo(this.map)
  }

  toggleLastPositions() {
    if (this.map.hasLayer(this.lastPosition_marker_group)) {
      this.map.removeLayer(this.lastPosition_marker_group)
    } else {
      this.lastPosition_marker_group.addTo(this.map)
    }
  }
  toggleStandort() {
    if (this.map.hasLayer(this.standort_marker_group)) {
      this.map.removeLayer(this.standort_marker_group)
    } else {
      this.standort_marker_group.addTo(this.map)
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

  center_current_position() {
    this.locationService.getCurrentPosition().then(position => {
      this.map.panTo(new L.LatLng( position.latitude, position.longitude ))
    })
    if (this.map.hasLayer(this.marker_current_position)) {
      this.map.removeLayer(this.marker_current_position)
    } else {
      this.marker_current_position.addTo(this.map)
    }
	}

  mark_current_position() {
    var svgIcon = L.divIcon({
      html: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
        <path fill="#f55660" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
        <g>
          <circle fill="#FFF" cx="74" cy="75" r="48"/>
          <svg xmlns="http://www.w3.org/2000/svg" x="22%" y="20%" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </g>
      </svg>
      `,
      className: "svg-icon",
      iconSize: [24, 40],
      iconAnchor: [12, 40],
      popupAnchor: [12, -40]
    });

    this.locationService.getCurrentPosition().then(position => {
      this.marker_current_position = L.layerGroup([L.marker([position.latitude, position.longitude], { icon: svgIcon}).bindPopup('Aktuelle Position')])
      this.marker_current_position.addTo(this.map)
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

  async openModal() {
    let position: PositionReport
    const { PositionComponent } = await import(
      '../positions/position/position.component'
    )

    position = { id_ship: this.id_ship!, id_streife: this.id_streife, date: new Date().toISOString(), location: {latitude: 0, longitude: 0 }, ort: '', description: ''}
    this.modalService.open(PositionComponent, {
      data: {
        title: 'Position hinzuf??gen',
        position
      }
    })
  }
}