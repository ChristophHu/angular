import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map } from 'rxjs/operators'
import { ShipSelection } from 'src/app/core/model/ship-selection.model'
import { AppService } from 'src/app/core/services/app.service'
import { allShipLoaded, loadAllShip } from './ship-selection.actions'
 
@Injectable()
export class ShipSelectionEffects {
    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllShip),
            concatMap(action => this.appService.getSchiffe()),
            map((shipSelection: ShipSelection[]) => allShipLoaded({ shipSelection }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}