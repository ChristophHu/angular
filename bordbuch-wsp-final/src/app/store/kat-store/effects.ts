import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map } from 'rxjs/operators'
import { Patrol } from 'src/app/core/model/patrol.model'
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model'
import { Ship } from 'src/app/core/model/ship.model'
import { AppService } from 'src/app/core/services/app.service'
import { loadPruefvermerke, pruefvermerkeLoaded } from './actions'
 
@Injectable()
export class Effects {
    loadShip$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPruefvermerke),
            concatMap(action => this.appService.getPruefvermerke()),
            map((pruefvermerke: Pruefvermerk[]) => pruefvermerkeLoaded({ pruefvermerke }))
        )
    })
    // loadPatrol$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadPatrol),
    //         concatMap(action => this.appService.getStreifeVonSchiff(action.id_ship)),
    //         map((patrol: Patrol) => patrolLoaded({ patrol }))
    //     )
    // })

    constructor(private actions$: Actions, private appService: AppService ) {}
}