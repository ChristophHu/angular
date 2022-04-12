import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Klarmeldung } from 'src/app/core/model/klarmeldung.model'
import { PositionReport } from 'src/app/core/model/positionreport.model'
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand'

import { AppService } from 'src/app/core/services/app.service'
import { deletePosition, deletePositionSuccess, insertKlarmeldung, insertKlarmeldungSuccess, insertPosition, insertPositionSuccess, loadAllZaehlerstaende, loadedAllZaehlerstaende, loadKlarmeldungByIdSchiff, loadKlarmeldungByIdSchiffSuccess, loadPositions, loadPositionsSuccess, updateKlarmeldung, updateKlarmeldungSuccess, updatePosition, updatePositionSuccess, updateZaehlerstand, updateZaehlerstandSuccess } from './actions'
 
@Injectable()
export class Effects {

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
                    tap(id => console.log(id)),
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
                    map((id: string) => deletePositionSuccess({ id }))
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