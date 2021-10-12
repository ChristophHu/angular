import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { Position } from '../../../../core/models/position';
import * as L from 'leaflet'
import { MapService } from '../../../../core/services/map.service';
import { Standort } from 'src/app/core/models/standort';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.sass']
})
export class LeafletMapComponent implements AfterViewInit, OnDestroy, OnInit {
  // leaflet
  private map!: L.Map
  // private sub!: Subscription
  private positionSource$ = new ReplaySubject<Position>(2)
  // private markerGroup!: Subscription
  // private markergruppe: any
  subscription!: Subscription
  private positionSubscription = new Subscription

  private positions: Standort[] = []
  // Position from all ships
  private allShips: L.Marker[] = []
  private allShippsGroup: L.LayerGroup = L.layerGroup()
  
  private arr: L.Marker[] = []
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private mapService: MapService) {}
  
  createMap() {
    const zoom = 12

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.positionSource$.next({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      })
    }
        
    this.map = L.map('map', {
      center: [33, 14],
      zoom: zoom
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

  ngOnInit(): void {
    this.subscription = this.mapService.centerposition.subscribe((position: Position) => {
        // this.centerMapOnPosition(position)
        this.map.panTo(new L.LatLng( position.latitude, position.longitude ))  
    })

    // map
    this.positionSubscription
      .add(
        this.mapService.lastPositions.subscribe((data: any) => {
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

    this.mapService.getLastPositionsFromAllShips()
    L.Icon.Default.imagePath = "assets/leaflet/"
  }

  ngAfterViewInit(): void {
    this.createMap()

    this.mapService.centerposition.next({ latitude: 52.6, longitude: 13.6})

    // this.markerGroup = this.mapService.markerGroup$.subscribe(data => {
    //   if (this.markergruppe) {
    //     this.markergruppe.clearLayers()
    //   }
      
    //   this.arr = []
    //   data.forEach(el => {
    //     this.arr.push(L.marker([el.latitude, el.longitude], el.options).addTo(this.map).bindPopup(el.description))
    //   })

    //   this.markergruppe = L.layerGroup(this.arr)
    //   this.markergruppe.addTo(this.map)
    // })

    this.setToLocalPosition()
    
  }

  // centerMapOnPosition(position: Position) {
  //   this.map.panTo(new L.LatLng( position.latitude, position.longitude ))
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
 
  getLocalPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.positionSource$.next({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        console.log(`local position: ${position.coords.latitude}, ${position.coords.longitude}`)
      })
    }
  }

  setToLocalPosition() {
    this.subscription.add(this.positionSource$.subscribe({
      next: (el: Position) => {
        this.map.panTo(new L.LatLng(el.latitude, el.longitude))
      },
      error: err => console.log(`error: ${err}`),
      complete: () => console.log(`complete`)
    }))
  }
}