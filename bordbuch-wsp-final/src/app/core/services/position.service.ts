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
    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe((patrol: any) => {
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
      
      this._specFacade.positions$.subscribe((data: PositionReport[] | undefined) => {
        // prüfen ob gespeicherte positionen auch der streife angehören
        console.log('positions')
        console.log(data)
        if (!data) {
          // 1. Position
          this._locationService.getCurrentPosition().then(position => {
            const insert: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: getLocalISO('now'), location: { latitude: position.latitude, longitude: position.longitude}, ort: '', description: `Start-Position` }
            this._specFacade.insertPosition(insert)
          })
        } else {
          console.log('positionen')
          console.log(data.length)
          // prüfen ob gespeicherte positionen auch der streife angehören
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
}
