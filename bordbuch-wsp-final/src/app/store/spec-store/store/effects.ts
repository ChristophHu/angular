import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Unklar } from 'src/app/core/model/unklar.model'
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand'

import { AppService } from 'src/app/core/services/app.service'
import { insertUnklar, insertUnklarSuccess, loadAllZaehlerstaende, loadedAllZaehlerstaende, loadUnklarByIdSchiff, loadUnklarByIdSchiffSuccess, updateUnklar, updateUnklarSuccess, updateZaehlerstand, updateZaehlerstandSuccess } from './actions'
 
@Injectable()
export class Effects {

    // unklar
    loadUnklarByIdSchiff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadUnklarByIdSchiff),
            concatMap(action => this.appService.loadUnklarByIdSchiff(action.id)),
            map((unklar: Unklar) => loadUnklarByIdSchiffSuccess({ unklar }))
        )
    })
    insertUnklar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertUnklar),
            switchMap(action => {
                return this.appService.insertUnklar(action.insert).pipe(
                    tap(id => console.log(id)),
                    map((id: string) => insertUnklarSuccess({ action, id }))
                )
            })
        )
    })
    updateUnklar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateUnklar),
            switchMap(action => {
                return this.appService.updateUnklar(action.update).pipe(
                    map(() => updateUnklarSuccess({ update: action.update }))
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