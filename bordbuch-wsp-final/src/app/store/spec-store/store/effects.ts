import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap } from 'rxjs/operators'
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand'

import { AppService } from 'src/app/core/services/app.service'
import { loadAllZaehlerstaende, loadedAllZaehlerstaende, updateZaehlerstand, updateZaehlerstandSuccess } from './actions'

// import { deleteReparaturFoto, deleteReparaturFotoSuccess, downloadReparaturFotos, downloadReparaturFotosSuccess, uploadReparaturFoto, uploadReparaturFotoSuccess } from './actions'
 
@Injectable()
export class Effects {

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
