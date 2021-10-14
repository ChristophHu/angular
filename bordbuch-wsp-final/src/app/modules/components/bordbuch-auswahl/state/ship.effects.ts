import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Ship } from '../model/ship.model';
import { AppService } from '../service/app.service';
import { allShipLoaded, loadAllShip } from './ship.actions';
 
@Injectable()
export class ShipEffects {
    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllShip),
            // only one request
            concatMap(action => this.appService.getSchiffe()),
            map((ship: Ship[]) => allShipLoaded({ ship }))
            // map(data => ({
            //     type: '[Load Data Effect] All Date Loaded',
            //     payload: data
            // }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}