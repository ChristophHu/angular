import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Betankung } from 'src/app/core/model/betankung'
import { Checklist } from 'src/app/core/model/checklist.model'
import { Klarmeldung } from 'src/app/core/model/klarmeldung.model'
import { Patrol } from 'src/app/core/model/patrol.model'
import { Peilung } from 'src/app/core/model/peilung.model'
import { PositionReport } from 'src/app/core/model/positionreport.model'
import { Reparatur } from 'src/app/core/model/reparatur'
import { Ship } from 'src/app/core/model/ship.model'
import { Tank } from 'src/app/core/model/tank.model'
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand'

import { AppService } from 'src/app/core/services/app.service'
import { deleteBesatzungSuccess, deleteBetankung, deleteBetankungSuccess, deletePatrol, deletePatrolBesatzung, deletePatrolSuccess, deletePosition, deletePositionSuccess, deleteReparaturFoto, deleteReparaturFotoSuccess, downloadReparaturFotos, downloadReparaturFotosSuccess, insertBetankung, insertBetankungSuccess, insertChecklist, insertKlarmeldung, insertKlarmeldungSuccess, insertPatrol, insertPatrolBesatzung, insertPatrolBesatzungSuccess, insertPatrolSuccess, insertPeilung, insertPeilungSuccess, insertPosition, insertPositionSuccess, insertReparatur, insertReparaturSuccess, loadAllZaehlerstaende, loadBetankungen, loadBetankungenSuccess, loadChecklist, loadChecklistSuccess, loadedAllZaehlerstaende, loadKlarmeldungByIdSchiff, loadKlarmeldungByIdSchiffSuccess, loadPatrol, loadPatrolSuccess, loadPeilung, loadPeilungSuccess, loadPositions, loadPositionsSuccess, loadReparaturen, loadReparaturenSuccess, loadShip, loadShipSuccess, loadTank, loadTankSuccess, updateBesatzungSuccess, updateBetankung, updateBetankungSuccess, updateKlarmeldung, updateKlarmeldungSuccess, updatePatrol, updatePatrolBesatzung, updatePatrolSuccess, updatePeilung, updatePosition, updatePositionSuccess, updateReparatur, updateReparaturSuccess, updateShip, updateShipSuccess, updateZaehlerstand, updateZaehlerstandSuccess, uploadReparaturFoto, uploadReparaturFotoSuccess } from './actions'
 
@Injectable()
export class Effects {

    // besatzung
    insertBesatzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPatrolBesatzung),
            switchMap(action => {
                return this.appService.insertBesatzung(action.insert).pipe(
                    map(id => insertPatrolBesatzungSuccess({ action, id }))
                )
            })
        )
    })
    updateBesatzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePatrolBesatzung),
            switchMap(action => {
                return this.appService.updateBesatzung(action.update).pipe(
                    map(() => updateBesatzungSuccess({ update: action.update }))
                )
            })
        )
    })
    deleteBesatzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePatrolBesatzung),
            switchMap(action => {
                return this.appService.deleteBesatzung(action.id).pipe(
                    map((id: string) => deleteBesatzungSuccess({ id: id }))
                )
            })
        )
    })

    // betankung
    loadBetankungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBetankungen),
            switchMap(action => {
                return this.appService.getBetankungen(action.id_ship).pipe(
                    map((betankungen: Betankung[]) => loadBetankungenSuccess({ betankungen }))
                )
            })
        )
    })
    insertBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertBetankung),
            switchMap(action => {
                return this.appService.insertBetankung(action.insert).pipe(
                    map(id => insertBetankungSuccess({ action, id }))
                )
            })
        )
    })
    updateBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateBetankung),
            switchMap(action => {
                // return this.appService.updateBetankung(action.update.changes)
                return this.appService.updateBetankung(action.update).pipe(
                    map(() => updateBetankungSuccess(action))
                )
            })
        )
    })
    deleteBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteBetankung),
            switchMap(action => {
                // return this.appService.deleteBetankung(action.id)
                return this.appService.deleteBetankung(action.id).pipe(
                    map(id => deleteBetankungSuccess(id))
                )
            })
        )
    })

    // checklist
    loadChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadChecklist),
            switchMap(action => {
                return this.appService.getLastChecklist(action.id_ship).pipe(
                    map((checklist: Checklist) => loadChecklistSuccess({ checklist }))
                    
                )
            })
        )
    })
    insertChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertChecklist),
            switchMap(action => {
                // return this.appService.insertCheckliste(action.insert)
                return this.appService.insertCheckliste(action.insert).pipe(
                    map(id => insertChecklisteSuccess({ action, id }))
                )
            })
        )
    }) 

    // Klarmeldung
    loadKlarmeldungByIdSchiff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadKlarmeldungByIdSchiff),
            concatMap(action => this.appService.getKlarmeldungByIdSchiff(action.id)),
            map((klarmeldung: Klarmeldung) => loadKlarmeldungByIdSchiffSuccess({ klarmeldung }))
        )
    })
    insertKlarmeldung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertKlarmeldung),
            switchMap(action => {
                return this.appService.insertKlarmeldung(action.insert).pipe(
                    tap(id => console.log(id)),
                    map((id: string) => insertKlarmeldungSuccess({ action, id }))
                )
            })
        )
    })
    updateKlarmeldung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateKlarmeldung),
            switchMap(action => {
                return this.appService.updateKlarmeldung(action.update).pipe(
                    map(() => updateKlarmeldungSuccess({ update: action.update }))
                )
            })
        )
    })

    // patrol
    loadPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPatrol),
            switchMap(action => {
                return this.appService.getStreifeVonSchiff(action.id_ship).pipe(
                    map((patrol: Patrol) => loadPatrolSuccess({ patrol }))
                )
            })
        )
    })
    
    insertPatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPatrol),
            switchMap(action => {
                return this.appService.insertStreife(action.insert).pipe(
                    map(id => insertPatrolSuccess({ action, id }))
                )
            })
        )
    })
    updatePatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePatrol),
            switchMap(action => {
                return this.appService.updateStreife(action.update).pipe(
                    map(() => updatePatrolSuccess({ action }))
                )
            })
        )
    })
    deletePatrol$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePatrol),
            switchMap(action => {
                return this.appService.deleteStreife(action.id).pipe(
                    map(status => deletePatrolSuccess({ status }))
                )
            })
        )
    })

    // peilung
    loadPeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPeilung),
            switchMap(action => {
                return this.appService.getPeilung(action.id_ship).pipe(
                    map((peilungen: Peilung[]) => loadPeilungSuccess({ peilungen }))
                )
            })
        )
    })
    insertPeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPeilung),
            switchMap(action => {
                return this.appService.insertPeilung(action.insert).pipe(
                    map(id => insertPeilungSuccess({ action, id }))
                )
            })
        )
    })
    updatePeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePeilung),
            // switchMap(action => {
            //     return this.appService.updatePeilung(action.peilung)
            // })
        )
    })

    // position
    loadPositions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPositions),
            concatMap(action => this.appService.getPosition(action.id)),
            map((positionReport: PositionReport[]) => loadPositionsSuccess({ positionReport }))
        )
    })
    insertPosition$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPosition),
            switchMap(action => {
                return this.appService.insertPosition(action.insert).pipe(
                    map((id: string) => insertPositionSuccess({ action, id }))
                )
            })
        )
    })
    updatePosition$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePosition),
            switchMap(action => {
                return this.appService.updatePosition(action.update).pipe(
                    map(() => updatePositionSuccess({ update: action.update }))
                )
            })
        )
    })
    deletePosition$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePosition),
            switchMap(action => {
                return this.appService.deletePosition(action.id).pipe(
                    map((status: string) => deletePositionSuccess({ id: action.id }))
                )
            })
        )
    })

    // reparaturen
    loadReparaturen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadReparaturen),
            switchMap(action => {
                return this.appService.getReparaturen(action.id_ship).pipe(
                    map((reparaturen: Reparatur[]) => loadReparaturenSuccess({ reparaturen }))
                )
            })
            // concatMap(action => this.appService.getReparaturen(action.id_ship)),
            // map((reparaturen: Reparatur[]) => ShipAction.reparaturenLoaded({ reparaturen }))
        )
    })
    insertReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertReparatur),
            switchMap(action => {
                return this.appService.insertReparatur(action.insert).pipe(
                    map(id => insertReparaturSuccess({ action, id }))
                )
            })
        )
    })
    updateReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateReparatur),
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

    // ship
    loadShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadShip),
            switchMap(action => {
                return this.appService.getSchiff(action.id_ship).pipe(
                    map((ship: Ship) => loadShipSuccess({ ship }))
                )
            })
        )
    })
    updateShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateShip),
            switchMap(action => {
                return this.appService.updateSchiff(action.update).pipe(
                    map(() => updateShipSuccess({ update: action.update }))
                )
            })
        )
    })

    // tank
    loadTank$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadTank),
            switchMap(action => {
                return this.appService.getTanksVonSchiff(action.id_ship).pipe(
                    map((tanks: Tank[]) => loadTankSuccess({ tanks }))
                )
            })
        )
    })

    // zaehlerstaende
    loadAllZaehlerstaende$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllZaehlerstaende),
            concatMap(action => this.appService.getZaehlerstaende(action.id)),
            map((zaehlerstaende: Zaehlerstand[]) => loadedAllZaehlerstaende({ zaehlerstaende }))
        )
    })
    updateZaehlerstand$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateZaehlerstand),
            switchMap(action => {
                return this.appService.updateZaehlerstand(action.update).pipe(
                    map((id: string) => updateZaehlerstandSuccess({ action, id }))
                )
            })
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}

function insertChecklisteSuccess(arg0: { action: { insert: Checklist } & import("@ngrx/store/src/models").TypedAction<"[Load Ship Effect] Insert Checklist">; id: any }): any {
    throw new Error('Function not implemented.')
}
