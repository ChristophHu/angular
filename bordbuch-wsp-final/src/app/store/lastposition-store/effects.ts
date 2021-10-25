import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, tap } from 'rxjs/operators'
import { PositionReport } from 'src/app/core/model/positionreport.model'
import { LastPositionActions } from '.'
import { AppService } from 'src/app/core/services/app.service'
 
@Injectable()
export class Effects {
    loadData$ = createEffect( 
        () => this.actions$.pipe(
            ofType(LastPositionActions.loadData),
            concatMap(action => this.appService.getLastPositionsFromAllShips()),
            map((lastPositions: PositionReport[]) => LastPositionActions.dataLoaded({ lastPositions }))
        )
    )

    constructor(private actions$: Actions, private appService: AppService ) {}
}