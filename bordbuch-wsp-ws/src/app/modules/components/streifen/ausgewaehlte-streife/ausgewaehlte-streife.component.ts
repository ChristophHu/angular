import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { LocationService } from 'src/app/core/services/location.service'
import * as L from 'leaflet'
import { Standort } from 'src/app/core/models/standort.model';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ausgewaehlte-streife',
  templateUrl: './ausgewaehlte-streife.component.html',
  styleUrls: ['./ausgewaehlte-streife.component.sass']
})
export class AusgewaehlteStreifeComponent implements OnInit, AfterViewInit, OnDestroy {
  status: boolean = false

  // leaflet
  private _map!: L.Map

  standorte: Standort[] = []
  standort_marker: L.Marker[] = []
  standort_marker_group: any

  constructor(private _route: ActivatedRoute, private locationService: LocationService, private _specFacade: SpecFacade) {
    const id_streife = this._route.snapshot.paramMap.get('id')
    _specFacade.loadAllStandorte(id_streife!)
  }

  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/leaflet/"

    this._specFacade.allStandorte$.subscribe(standorte => {
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
    this.standort_marker_group.addTo(this._map)
  }

  clearMarker() {
    console.log(this._map.hasLayer(this.standort_marker_group))
    if (this.standort_marker_group && this._map.hasLayer(this.standort_marker_group))
      this._map.removeLayer(this.standort_marker_group);
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
