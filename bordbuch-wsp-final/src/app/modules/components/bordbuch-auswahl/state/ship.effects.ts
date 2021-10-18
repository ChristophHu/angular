import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Ship } from '../../../../core/model/ship.model';
import { AppService } from '../../../../core/services/app.service';
import { allShipLoaded, loadAllShip } from './ship.actions';
 
@Injectable()
export class ShipEffects {
    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllShip),
            concatMap(action => this.appService.getSchiffe()),
            map((ship: Ship[]) => allShipLoaded({ ship }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}