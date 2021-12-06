import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, switchMap, map, tap } from 'rxjs/operators';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { allDataLoaded, dataUpdate, loadAllData } from './actions';
import { AppService } from '../../core/services/app.service'
 
@Injectable()
export class Effects {
    loadData$ = createEffect( 
        () => this.actions$.pipe(
            ofType(loadAllData),
            concatMap(action => 
                this.appService.getZaehlerstaende(action.id_ship)
            ),
            map((zaehlerstand: Zaehlerstand[]) => allDataLoaded({ zaehlerstand }))
        )
    )

    updateData$ = createEffect(
        () => this.actions$.pipe(
            ofType(dataUpdate),
            switchMap(action => {
                return this.appService.updateZaehlerstand(action.update.id, action.update.changes)
            })
        ), { dispatch: false }
    )

    constructor(private actions$: Actions, private appService: AppService ) {}
}