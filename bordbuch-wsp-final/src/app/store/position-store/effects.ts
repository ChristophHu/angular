import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, tap } from 'rxjs/operators'
import { Position } from 'src/app/core/model/position'
import { AppService } from 'src/app/core/services/app.service'
import { PositionAction } from '.'
 
@Injectable()
export class Effects {
    loadPositions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PositionAction.loadPositions),
            concatMap(action => this.appService.getPosition(action.id_ship)),
            tap(data => console.log(data)),
            map((positions: Position[]) => PositionAction.loadedPositions({ positions }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}