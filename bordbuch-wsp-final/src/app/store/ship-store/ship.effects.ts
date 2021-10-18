import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map } from 'rxjs/operators'
import { Patrol } from 'src/app/core/model/patrol.model'
import { Ship } from 'src/app/core/model/ship.model'
import { AppService } from 'src/app/core/services/app.service'
import { shipLoaded, loadShip, loadPatrol, patrolLoaded } from './ship.actions'
 
@Injectable()
export class ShipEffects {
    loadShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadShip),
            concatMap(action => this.appService.getSchiff(action.id_ship)),
            map((ship: Ship) => shipLoaded({ ship }))
        )
    })
    loadPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPatrol),
            concatMap(action => this.appService.getStreifeVonSchiff(action.id_ship)),
            map((patrol: Patrol) => patrolLoaded({ patrol }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}