import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { Position } from '../../../../core/models/position';
import * as L from 'leaflet'
import { MapService } from '../../../../core/services/map.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.sass']
})
export class LeafletMapComponent implements AfterViewInit, OnDestroy, OnInit {
  // leaflet
  private map!: L.Map
  private sub!: Subscription
  private positionSource$ = new ReplaySubject<Position>(2)
  private markerGroup!: Subscription
  private markergruppe: any

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

  }

  ngAfterViewInit(): void {
    this.createMap()
    
    this.centerMapOnPosition({ latitude: 52.6, longitude: 13.6})

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

  centerMapOnPosition(position: Position) {
    this.map.panTo(new L.LatLng( position.latitude, position.longitude ))
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
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
    this.sub = this.positionSource$.subscribe({
      next: (el: Position) => {
        this.map.panTo(new L.LatLng(el.latitude, el.longitude))
      },
      error: err => console.log(`error: ${err}`),
      complete: () => console.log(`complete`)
    })
  } 
}