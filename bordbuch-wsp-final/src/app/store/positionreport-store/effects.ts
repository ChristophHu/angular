import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { PositionReport } from 'src/app/core/model/positionreport.model'
import { AppService } from 'src/app/core/services/app.service'
import { PositionActions } from '.'
import { allDataLoaded, loadAllData } from './actions'
 
@Injectable()
export class Effects {
    loadData$ = createEffect( 
        () => this.actions$.pipe(
            ofType(loadAllData),
            switchMap(action => {
                return this.appService.getPosition(action.id_ship).pipe(
                    map((positionReport: PositionReport[]) => 
                        PositionActions.allDataLoaded({ positionReport })
                    )
                )
            })
        )
    )
    insertDate$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PositionActions.insertData),
            switchMap(action => {
                return this.appService.insertPosition(action.positionReport).pipe(
                    map(positionReport => 
                        PositionActions.insertDataSuccess({ positionReport })
                    )
                )
            })
        )
    })
    updateDate$ = createEffect(
        () => this.actions$.pipe(
            ofType(PositionActions.updateData),
            switchMap(action => {
                return this.appService.updatePosition(action.update.changes as PositionReport)
            })
        ), { dispatch: false }
    )
    deleteDate$ = createEffect(
        () => this.actions$.pipe(
            ofType(PositionActions.deleteData),
            switchMap(action => {
                return this.appService.deletePosition(action.id)
            })
        ), { dispatch: false }
    )

    constructor(private actions$: Actions, private appService: AppService ) {}
}