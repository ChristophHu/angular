import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, switchMap, tap } from 'rxjs/operators'
import { Betankung } from 'src/app/core/model/betankung'
import { Patrol } from 'src/app/core/model/patrol.model'
import { Reparatur } from 'src/app/core/model/reparatur'
import { Ship } from 'src/app/core/model/ship.model'
import { AppService } from 'src/app/core/services/app.service'
import { ShipAction } from '.'
 
@Injectable()
export class ShipEffects {
    loadShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadShip),
            tap(action => console.log(action)),
            switchMap(action => {
                return this.appService.getSchiff(action.id_ship).pipe(
                    map((ship: Ship) => ShipAction.shipLoaded({ ship }))
                )
            })
            // concatMap(action => this.appService.getSchiff(action.id_ship)),
            // map((ship: Ship) => ShipAction.shipLoaded({ ship }))
        )
    })

    loadPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadPatrol),
            switchMap(action => {
                return this.appService.getStreifeVonSchiff(action.id_ship).pipe(
                    tap((patrol: Patrol) => console.log(patrol)),
                    map((patrol: Patrol) => ShipAction.patrolLoaded({ patrol }))
                )
            })
            // concatMap(action => this.appService.getStreifeVonSchiff(action.id_ship)),
            // map((patrol: Patrol) => ShipAction.patrolLoaded({ patrol }))
        )
    })
    
    insertPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.insertPatrol),
            switchMap(action => {
                return this.appService.insertStreife(action.insert).pipe(
                    map(id => ShipAction.insertPatrolSuccess({ action, id }))
                )
            })
        )
    })
    updatePatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.updatePatrol),
            switchMap(action => {
                return this.appService.updateStreife(action.update)
            })
        )
    })
    deletePatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.deletePatrol),
            switchMap(action => {
                return this.appService.deleteStreife(action.id).pipe(
                    map(status => ShipAction.deletePatrolSuccess({ status }))
                )
            })
        )
    })

    loadReparaturen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadReparaturen),
            switchMap(action => {
                return this.appService.getReparaturen(action.id_ship).pipe(
                    map((reparaturen: Reparatur[]) => ShipAction.reparaturenLoaded({ reparaturen }))
                )
            })
            // concatMap(action => this.appService.getReparaturen(action.id_ship)),
            // map((reparaturen: Reparatur[]) => ShipAction.reparaturenLoaded({ reparaturen }))
        )
    })
    insertReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.insertReparatur),
            switchMap(action => {
                return this.appService.insertReparatur(action.insert).pipe(
                    map(id => ShipAction.insertReparaturSuccess({ action, id }))
                )
            })
        )
    })

    loadBetankungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadBetankungen),
            switchMap(action => {
                return this.appService.getBetankungen(action.id_ship).pipe(
                    map((betankungen: Betankung[]) => ShipAction.betankungenLoaded({ betankungen }))
                )
            })
            // concatMap(action => this.appService.getBetankungen(action.id_ship)),
            // map((betankungen: Betankung[]) => ShipAction.betankungenLoaded({ betankungen }))
        )
    })
    insertBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.insertBetankung),
            switchMap(action => {
                return this.appService.insertBetankung(action.insert).pipe(
                    map(id => ShipAction.insertBetankungSuccess({ action, id }))
                )
            })
        )
    })

    insertBesatzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.insertPatrolBesatzung),
            switchMap(action => {
                return this.appService.insertBesatzung(action.insert).pipe(
                    map(id => ShipAction.insertPatrolBesatzungSuccess({ action, id }))
                )
            })
        )
    })
    updateBesatzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.updatePatrolBesatzung),
            switchMap(action => {
                return this.appService.updateBesatzung(action.update.changes)
            })
        )
    })
    deleteBesatzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.deletePatrolBesatzung),
            switchMap(action => {
                return this.appService.deleteBesatzung(action.id)
            })

            // map((patrol: Patrol) => ShipAction.patrolLoaded({ patrol }))
            // tap((action) => {
            //     ShipAction.deletePatrolBesatzungSuccess(action)
            //     console.log(action)
                
            // }),
            // concatMap(action => this.appService.deleteBesatzung(action.id)),
            // tap(action => console.log(action)),
            // map(action => ShipAction.deletePatrolBesatzungSuccess({action}))

        )
    }, { dispatch: false })
    

    constructor(private actions$: Actions, private appService: AppService ) {}
}