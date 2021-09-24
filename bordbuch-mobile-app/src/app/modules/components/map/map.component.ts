import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import * as L from 'leaflet'
import { ReplaySubject, Subscription } from 'rxjs';
import { Position } from 'src/app/core/models/position';
import { Standort } from 'src/app/core/models/standort';
import { AppService } from 'src/app/core/services/app.service';
import { MapService } from 'src/app/core/services/map.service';
import { SimpleModalService } from 'src/app/shared/components/simple-modal/simple-modal.service';

import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  positions: Standort[] = []
  
  constructor(private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private mapService: MapService, private simpleModalService: SimpleModalService, private appService: AppService) {
    this.positionForm = this._formBuilder.group({
      funktion: ['']
    })
  }

  ngOnInit(): void {
    const i = interval(30000)

    this.positionSubscription
      .add(
        this.activatedRoute.params.subscribe(
          (params: Params) => this.id = params['id']
        )
      )
      .add(
        this.appService.positions.subscribe((data: any) => {
          this.positions = data
        })
      )
      .add(
        i.subscribe(data => {
          console.log(this.appService._id_streife)
          if (this.appService._id_streife) {
            const position: Standort = { id_ship: this.id, date: new Date().toISOString(), location: { latitude: 0, longitude: 0}, description: 'Testposition', id_streife: this.appService._id_streife }
            this.appService.insertPosition(position)
          }
        })
      )
    this.appService.getPosition(this.id)
  }

  ngAfterViewInit(): void {
    this.createMap()
    this.setToLocalPosition()
  }

  ngOnDestroy(): void {
    this.positionSubscription.unsubscribe()
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
    console.log('click')
    console.log(this.appService._id_streife)
    this.positionSource$.subscribe({
      next: (pos: Position) => {

        if (this.appService._id_streife) {
          const position: Standort = { id_ship: this.id, date: new Date().toISOString(), location: { latitude: pos.latitude, longitude: pos.longitude}, description: 'Testposition', id_streife: this.appService._id_streife }
          console.log(position)
          this.appService.insertPosition(position)
        }
      },
      error: err => console.log(`error: ${err}`),
      complete: () => console.log(`complete`)
    })
  }

}
