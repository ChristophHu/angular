import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as L from 'leaflet'
import { Position } from 'src/app/core/model/position';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() positionActiveChange: EventEmitter<Position> = new EventEmitter<Position>()
  @Input() set positionActive(value: Position) {
    this.position = value
  }
  
  position: Position = { latitude: 0, longitude: 0 }

  private map!: L.Map

  private svgIcon = L.divIcon({
    html: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
      <path fill="#414141" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
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

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    if (this.position == { latitude: 0, longitude: 0 }) this.setCurrentPosition()
  }

  ngAfterViewInit(): void {
    this.createMap()
    this.center_current_position()
    this.setMarker()
  }

  ngOnDestroy(): void {
    if (this.map) this.map.remove()
  }

  createMap() {
	  const zoom = 18
  	
    if (this.map) this.map.remove()

	  this.map = L.map('map', {
      center: [this.position.latitude, this.position.longitude],
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

  setMarker() {
    let marker_position = new L.Marker([this.position.latitude, this.position.longitude], {draggable: true, icon: this.svgIcon })
    marker_position.on('dragend', (event: any) => {
      var marker = event.target;
      var position = marker.getLatLng()
      this.position = { latitude: position.lat, longitude: position.lng }
      marker.setLatLng(new L.LatLng(position.lat, position.lng), { draggable:'true', icon: this.svgIcon })
      this.map.panTo(new L.LatLng(position.lat, position.lng))

      this.positionActiveChange.emit(this.position)
    })
    this.map.addLayer(marker_position)
  }

  center_current_position() {
    this.locationService.getCurrentPosition().then(position => {
      this.map.panTo(new L.LatLng( position.latitude, position.longitude ))
    })
  }
  setCurrentPosition() {
    this.locationService.getCurrentPosition().then(position => {
      this.position = { latitude: position.latitude, longitude: position.longitude }
    })
  }
}
