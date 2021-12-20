import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { LocationService } from 'src/app/core/services/location.service'
import * as L from 'leaflet'

@Component({
  selector: 'app-ausgewaehlte-streife',
  templateUrl: './ausgewaehlte-streife.component.html',
  styleUrls: ['./ausgewaehlte-streife.component.sass']
})
export class AusgewaehlteStreifeComponent implements OnInit, AfterViewInit {

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

}
