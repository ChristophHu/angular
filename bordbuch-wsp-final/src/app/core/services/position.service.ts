import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { getLocalISO } from 'src/app/shared/utils';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
import { SpecSelectors } from 'src/app/store/spec-store';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { Patrol } from '../model/patrol.model';
import { PositionReport } from '../model/positionreport.model';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private saving: boolean = false
  private patrol!: Patrol

  private _positionLogInterval: Observable<number> = interval(environment.positionLogInterval*(60*1000))
  
  constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade, private _locationService: LocationService) {
    console.log('positionservice constr.')
    this.store.pipe(select(SpecSelectors.selectSaving)).subscribe((saving: boolean) => {
      console.log('saving')
      console.log(saving)
      this.saving = saving
      this.checkStatus()
    })
    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe((patrol: Patrol | undefined) => {
      if (patrol) {
        console.log('status')
        console.log(patrol)
        this.patrol = patrol
        this.checkStatus()
      }
    })
  }

  checkStatus() {
    if (this.saving && this.patrol.status == 'aktiv') {

      this._specFacade.getPositionenByIdPatrol(this.patrol.id!).subscribe((positions: PositionReport[] | undefined) => {
        if (positions) {
          // prüfen ob gespeicherte positionen auch der streife angehören
          console.log('positions')
          console.log(positions)
          console.log(positions.length)
          if (positions.length == 0) {
            // 1. Position
            // this._locationService.getCurrentPosition().then(position => {
              const insert: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: getLocalISO('now'), location: { latitude: 0, longitude: 0 }, ort: '', description: `Start-Position` }
              this._specFacade.insertPosition(insert)
            // })
          } else {
            console.log('positionen')
            // prüfen ob gespeicherte positionen auch der streife angehören
            if (positions[0].id_streife == this.patrol.id) {
              console.log('stimmt überein')
              const orderedPositions = this.orderBy(positions, 'date')
              console.log(orderedPositions)
              console.log(orderedPositions[0].date) // lastPosition
              // now - date > 60Min.
              // now - date = 50 > timer 10 Min. zum Intervallstart und position setzten
              const dt = Date.parse(positions[0].date)
              console.log(dt)
              // const h: string[] = positions[0].date.split(" ")
            }
          }
        }
       
      })


      // jede weitere position (alle 60 Min.)
      // cordova-plugin-advanced-location & cordova-background
      // this._positionLogInterval.subscribe((data: number) => {
      //   this._locationService.getCurrentPosition().then(position => {
      //     const positionReport: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: getLocalISO('now'), location: { latitude: position.latitude, longitude: position.longitude}, ort: '',description: `${data+1} Autom. gesetzte Position` }
      //     this.store.dispatch(PositionActions.insertData({ positionReport }))
      //   })
      // })

      // beim erneuten öffnen der app
      // lösung: status beim schließen auf "inaktiv" setzen


    }
  }

  orderBy(input: any, byProperty: string): any {
      if (input != null && input.length > 0 && Array.isArray(input)) {
        let result = [...input]
        result.sort((a, b) => (a[byProperty] < b[byProperty] ? -1 : 1))
        return result
      }
      return []
    }
}
