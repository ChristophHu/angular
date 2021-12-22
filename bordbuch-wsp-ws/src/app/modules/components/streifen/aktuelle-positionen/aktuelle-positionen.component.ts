import { AfterViewInit, Component, OnInit } from '@angular/core'
import * as L from 'leaflet'
import { ReplaySubject } from 'rxjs'
import { Position } from 'src/app/core/models/position'
import { LocationService } from 'src/app/core/services/location.service'
import { Animations } from 'src/app/shared/animations'

@Component({
  selector: 'app-aktuelle-positionen',
  templateUrl: './aktuelle-positionen.component.html',
  styleUrls: ['./aktuelle-positionen.component.sass'],
  animations   : Animations
})
export class AktuellePositionenComponent implements OnInit, AfterViewInit {
  status: boolean = false

  // leaflet
  private _map!: L.Map
  private positionSource$ = new ReplaySubject<Position>(2)

  constructor(private locationService: LocationService) { }

  ngAfterViewInit(): void {
    this.createMap()
  }

  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/leaflet/"

    // this.cposition()
  }

  createMap() {
	  const zoom = 12
  
	  // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.positionSource$.next({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    //   })
	  // }
		  
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

  // cposition() {
  //   var svgIcon = L.divIcon({
  //     html: `
  //     <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
  //       <path fill="#f55660" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
  //       <g>
  //         <circle fill="#FFF" cx="74" cy="75" r="48"/>
  //         <svg x="22%" y="20%" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  //           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  //           <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  //           <path d="M4 18l-1 -5h18l-2 4" />
  //           <path d="M5 13v-6h8l4 6" />
  //           <path d="M7 7v-4h-1" />
  //         </svg>
  //       </g>
  //     </svg>
  //     `,
  //     className: "svg-icon",
  //     iconSize: [24, 40],
  //     iconAnchor: [12, 40],
  //     popupAnchor: [12, -40]
  //   });

  //   // this.currentPositionSubscription = interval(10*1000).subscribe((data: number) => {
  //       this.locationService.getCurrentPosition().then(position => {
  //         const Pos = L.layerGroup([L.marker([position.latitude, position.longitude], { icon: svgIcon}).bindPopup('Aktuelle Position')])
  //         Pos.remove()
  //         Pos.addTo(this.map)
  //       })
  //   // })
  // }

}
