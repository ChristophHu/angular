import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Betankung } from 'src/app/core/model/betankung'
import { Checklist } from 'src/app/core/model/checklist.model'
import { Geraetebuch } from 'src/app/core/model/geraetebuch.model'
import { Patrol } from 'src/app/core/model/patrol.model'
import { Peilung } from 'src/app/core/model/peilung.model'
import { Reparatur } from 'src/app/core/model/reparatur'
import { Ship } from 'src/app/core/model/ship.model'
import { Tank } from 'src/app/core/model/tank.model'
import { AppService } from 'src/app/core/services/app.service'

import { ShipAction } from '.'
import { deleteReparaturFoto, deleteReparaturFotoSuccess, downloadReparaturFotos, downloadReparaturFotosSuccess, updateReparaturSuccess, uploadReparaturFoto, uploadReparaturFotoSuccess } from './ship.actions'
 
@Injectable()
export class ShipEffects {
    loadShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadShip),
            switchMap(action => {
                return this.appService.getSchiff(action.id_ship).pipe(
                    map((ship: Ship) => ShipAction.shipLoaded({ ship }))
                )
            })
        )
    })
    updateShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.updateShip),
            switchMap(action => {
                return this.appService.updateSchiff(action.update).pipe(
                    map(() => ShipAction.updateShipSuccess({ update: action.update }))
                )
            })
        )
    })


    loadPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadPatrol),
            switchMap(action => {
                return this.appService.getStreifeVonSchiff(action.id_ship).pipe(
                    map((patrol: Patrol) => ShipAction.patrolLoaded({ patrol }))
                )
            })
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
    updateReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.updateReparatur),
            switchMap(action => {
                return this.appService.updateReparatur(action.update).pipe(
                    map((id: string) => updateReparaturSuccess(action))
                )
            })
        )
    })

    // reparaturfotos
    downloadReparaturFotos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(downloadReparaturFotos),
            concatMap(action => this.appService.downloadReparaturFoto(action.id)),
            map((fotos: any[]) => downloadReparaturFotosSuccess({ fotos }))
        )
    })
    uploadReparaturFoto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(uploadReparaturFoto),
            switchMap(action => {
                return this.appService.uploadReparaturFoto(action.upload).pipe(
                    map((id: string) => uploadReparaturFotoSuccess({ action, id }))
                )
            })
        )
    })
    deleteReparaturFoto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteReparaturFoto),
            switchMap(action => {
                return this.appService.deleteReparaturFoto(action.id).pipe(
                    map(() => deleteReparaturFotoSuccess(action))
                )
            })
        )
    })

    // betankung
    loadBetankungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadBetankungen),
            switchMap(action => {
                return this.appService.getBetankungen(action.id_ship).pipe(
                    map((betankungen: Betankung[]) => ShipAction.betankungenLoaded({ betankungen }))
                )
            })
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
    updateBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.updateBetankung),
            switchMap(action => {
                return this.appService.updateBetankung(action.update.changes)
            })
        )
    })
    deleteBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.deleteBetankung),
            switchMap(action => {
                return this.appService.deleteBetankung(action.id)
            })
        )
    }, { dispatch: false })

    // tank
    loadTank$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadTank),
            switchMap(action => {
                return this.appService.getTanksVonSchiff(action.id_ship).pipe(
                    map((tanks: Tank[]) => ShipAction.loadedTank({ tanks }))
                )
            })
        )
    })

    // besatzung
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
        )
    }, { dispatch: false })

    // peilung
    loadPeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadPeilung),
            switchMap(action => {
                return this.appService.getPeilung(action.id_ship).pipe(
                    map((peilungen: Peilung[]) => ShipAction.loadedPeilung({ peilungen }))
                )
            })
        )
    })
    insertPeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.insertPeilung),
            switchMap(action => {
                return this.appService.insertPeilung(action.insert).pipe(
                    map(id => ShipAction.insertPeilungSuccess({ action, id }))
                )
            })
        )
    })
    updatePeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.updatePeilung),
            // switchMap(action => {
            //     return this.appService.updatePeilung(action.peilung)
            // })
        )
    })

    // checklist
    loadChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.loadChecklist),
            switchMap(action => {
                return this.appService.getLastChecklist(action.id_ship).pipe(
                    map((checklist: Checklist) => ShipAction.loadedChecklist({ checklist }))
                    
                )
            })
        )
    })
    insertChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShipAction.insertChecklist),
            switchMap(action => {
                return this.appService.insertCheckliste(action.insert)
            })
        )
    }) 
    

    constructor(private actions$: Actions, private appService: AppService ) {}
}