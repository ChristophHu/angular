import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, tap } from 'rxjs/operators'
import { Betankung } from 'src/app/core/model/betankung'
import { Patrol } from 'src/app/core/model/patrol.model'
import { Reparatur } from 'src/app/core/model/reparatur'
import { Ship } from 'src/app/core/model/ship.model'
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand'
import { AppService } from 'src/app/core/services/app.service'
import { ShipAction } from '.'
 
@Injectable()
export class ShipEffects {
    loadShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadShip),
            concatMap(action => this.appService.getSchiff(action.id_ship)),
            map((ship: Ship) => ShipAction.shipLoaded({ ship }))
        )
    })

    loadPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadPatrol),
            concatMap(action => this.appService.getStreifeVonSchiff(action.id_ship)),
            map((patrol: Patrol) => ShipAction.patrolLoaded({ patrol }))
        )
    })

    loadReparaturen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadReparaturen),
            concatMap(action => this.appService.getReparaturen(action.id_ship)),
            map((reparaturen: Reparatur[]) => ShipAction.reparaturenLoaded({ reparaturen }))
        )
    })

    loadBetankungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadBetankungen),
            concatMap(action => this.appService.getBetankungen(action.id_ship)),
            map((betankungen: Betankung[]) => ShipAction.betankungenLoaded({ betankungen }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}