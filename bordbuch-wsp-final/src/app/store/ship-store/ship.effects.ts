import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map } from 'rxjs/operators'
import { Ship } from 'src/app/core/model/ship.model'
import { AppService } from 'src/app/core/services/app.service'
import { shipLoaded, loadShip } from './ship.actions'
 
@Injectable()
export class ShipEffects {
    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadShip),
            concatMap(action => this.appService.getSchiff('1')),
            map((ship: Ship[]) => shipLoaded({ ship }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}