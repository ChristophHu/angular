import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import * as L from 'leaflet'
import { ReplaySubject, Subscription } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { Standort } from 'src/app/core/models/standort';
import { AppService } from 'src/app/core/services/app.service';
import { MapService } from 'src/app/core/services/map2.service';

import { interval } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionComponent } from '../positionen/position/position.component';
import { LocationService } from 'src/app/core/services/location.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  id: string = ''

  // leaflet
  private map!: L.Map
  private positionSource$ = new ReplaySubject<Position>(2)

  positionForm: FormGroup

  private positionSubscription = new Subscription
  private currentPositionSubscription = new Subscription
  
  private positions: Standort[] = []
  private markergroup: any
  private arr: L.Marker[] = []

  // Position from all ships
  private allShips: L.Marker[] = []
  private allShippsGroup: L.LayerGroup = L.layerGroup()

  constructor(private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private appService: AppService, private locationService: LocationService, private modalService: ModalService<PositionComponent>) {
    this.positionForm = this._formBuilder.group({
      funktion: ['']
    })
  }

//   <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
//   <path fill="#cc756b" stroke="#FFF" stroke-width="6" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
//   <circle fill="#fff" cx="74" cy="75" r="61"/>
//   <circle fill="#FFF" cx="74" cy="75" r="48"/>
//   <text fill="#FFF" x="0" y="0">Test</text>
// </svg>

  ngOnInit(): void {
    this.positionSubscription
      .add(
        this.activatedRoute.params.subscribe(
          (params: Params) => this.id = params['id']
        )
      )
      .add(
        this.appService.positions.subscribe((data: any) => {
          this.positions = []
          this.positions = data
          data.forEach((pos: Standort, index: number) => {

            var svgIcon = L.divIcon({
              html: `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
                <path fill="#4287f5" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
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
        this.appService.lastPositions.subscribe((data: any) => {
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
                <p class="absolute -left-4 w-20 text-center bg-gray-200 bg-opacity-60">${ship.id_ship}</p>
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
            this.allShippsGroup.addTo(this.map)
          }
        }, error => console.error(error))
      )
      // .add(
      //   i.subscribe(data => {
      //     if (this.appService._id_streife) {
      //       const position: Standort = { id_ship: this.id, date: new Date().toISOString(), location: { latitude: 0, longitude: 0}, description: 'Autom. gesetzte Position', id_streife: this.appService._id_streife }
      //       this.appService.insertPosition(position)
      //     }
      //   })
      // )
    this.appService.getPosition(this.id)
    this.appService.getLastPositionsFromAllShips()
    L.Icon.Default.imagePath = "assets/leaflet/"

    this.cposition()
  }

  ngAfterViewInit(): void {
    this.createMap()
    this.setToLocalPosition()
    this.markergroup.addTo(this.map)
    this.allShippsGroup.addTo(this.map)
  }

  ngOnDestroy(): void {
    this.positionSubscription.unsubscribe()
    this.currentPositionSubscription.unsubscribe()
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

  addPosition() {
    this.positionSource$
      .subscribe({
      next: (pos: Position) => {

        if (this.appService._id_streife) {
          const position: Standort = { id_ship: this.id, date: new Date().toISOString(), location: { latitude: pos.latitude, longitude: pos.longitude}, description: 'Manuel gesetzte Position', id_streife: this.appService._id_streife }
          this.appService.insertPosition(position)
        }
      },
      error: err => console.log(`error: ${err}`),
      complete: () => console.log(`complete`)
    })
  }

  showMarkergroup() {
    this.markergroup.remove()
    this.markergroup.addTo(this.map)
  }
  hideMarkergroup() {
    this.markergroup.remove()
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

  async openPositionModal(id?: string) {
    let position: Standort | undefined

    const { PositionComponent } = await import(
      '../positionen/position/position.component'
    )

    this.locationService.getCurrentPosition().then((data: any) => {
      position = { id_ship: this.appService._id_schiff, id_streife: this.appService._id_streife, date: new Date().toISOString(), location: {latitude: data.latitude, longitude: data.longitude }, description: ''}
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position hinzufügen',
          position
        }
      })
    }, error => console.error(error))
  }
}
