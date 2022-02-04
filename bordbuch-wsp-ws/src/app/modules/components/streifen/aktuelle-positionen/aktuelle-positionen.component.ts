import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core'
import * as L from 'leaflet'
import { Observable, of, ReplaySubject, Subject } from 'rxjs'
import { Position } from 'src/app/core/models/position'
import { Schiff } from 'src/app/core/models/schiff.model'
import { Standort } from 'src/app/core/models/standort.model'
import { LocationService } from 'src/app/core/services/location.service'
import { Animations } from 'src/app/shared/animations'
import { KatFacade } from 'src/app/store/kat-store/kat.facade'
import { SpecFacade } from 'src/app/store/spec-store/spec.facade'

@Component({
  selector: 'app-aktuelle-positionen',
  templateUrl: './aktuelle-positionen.component.html',
  styleUrls: ['./aktuelle-positionen.component.sass'],
  animations   : Animations
})
export class AktuellePositionenComponent implements OnInit, AfterViewInit, OnDestroy {
  status: boolean = false

  // leaflet
  private _map!: L.Map

  schiffe$: Observable<any[]> | undefined

  standorte: Standort[] = []
  standort_marker: L.Marker[] = []
  standort_marker_group: any

  constructor(private locationService: LocationService, private _specFacade: SpecFacade, private _katFacade: KatFacade) {   
    this.schiffe$ = this._katFacade.schiffe$
  }

  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/leaflet/"

    this._specFacade.allLastStandorte$.subscribe(standorte => {
      if (standorte) {
        this.standorte = standorte
      }
    })
  }

  ngAfterViewInit(): void {
    this.createMap()
    this.set_marker(this.standorte)
    this.mark_current_position()
  }

  ngOnDestroy(): void {
    this._map.remove()
  }

  set_marker(standorte: Standort[]) {
    this.standort_marker = []
    if (!standorte) return
    standorte.forEach((standort: Standort, index: number) => {
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

      this.standort_marker.push(L.marker([standort.location.latitude, standort.location.longitude], { icon: svgIcon }).bindPopup(`<u>${standort.name}</u><br><br>Datum: ${standort.date}<br>Beschreibung: ${standort.description}`))
    })
    this.standort_marker_group = L.layerGroup(this.standort_marker)
    this.standort_marker_group.addTo(this._map)
  }

  checked(e: Schiff[]) {
    const ids: string[] = e.map(schiff => {
      return schiff.id
    })
    const cleared = this.standorte.filter((standort: Standort) => ids.includes(standort.id_ship))

    this._map.removeLayer(this.standort_marker_group)
    this.set_marker(cleared)
  }

  hovered(id: any) {
    const standort = this.standorte.find(standort => standort.id_ship == id)
    if (standort) this._map.panTo(new L.LatLng( standort!.location.latitude, standort!.location.longitude ))
  }

  reset() {
    this._map.removeLayer(this.standort_marker_group)
    this.set_marker(this.standorte)
  }

  createMap() {
	  const zoom = 12
		  
	  this._map = L.map('map', {
      center: [52.5, 13.3],
      zoom: zoom,
      zoomControl: false
	  })
  
	  // Layer: OpenStreetMap
	  var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  });
	  OpenStreetMap_Mapnik.addTo(this._map)
  
	  // Layer: OpenSeaMap
	  var OpenSeaMap = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
	  });
	  OpenSeaMap.addTo(this._map)
	}

  center_current_position() {
    this.locationService.getCurrentPosition().then(position => {
      this._map.panTo(new L.LatLng( position.latitude, position.longitude ))
    })
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
      const Pos = L.layerGroup([L.marker([position.latitude, position.longitude], { icon: svgIcon}).bindPopup('Aktuelle Position')])
      Pos.remove()
      Pos.addTo(this._map)
    })
  }
}
