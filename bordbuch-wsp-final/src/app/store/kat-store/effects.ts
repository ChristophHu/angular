import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map } from 'rxjs/operators'
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model'
import { ShipSelection } from 'src/app/core/model/ship-selection.model'
import { Zaehlerstandstyp } from 'src/app/core/model/zaehlerstandstyp'
import { AppService } from 'src/app/core/services/app.service'
import { loadAllShip, allShipLoaded, loadPruefvermerke, pruefvermerkeLoaded, loadZaehlerstandstypen, zaehlerstandstypenLoaded } from './actions'
 
@Injectable()
export class Effects {
    loadShips$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllShip),
            concatMap(action => this.appService.getSchiffe()),
            map((shipSelection: ShipSelection[]) => allShipLoaded({ shipSelection }))
        )
    })
    loadPruefvermerke$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPruefvermerke),
            concatMap(action => this.appService.getPruefvermerke()),
            map((pruefvermerke: Pruefvermerk[]) => pruefvermerkeLoaded({ pruefvermerke }))
        )
    })
    loadZaehlerstandstypen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadZaehlerstandstypen),
            concatMap(action => this.appService.getZaehlerstandstypen()),
            map((zaehlerstandstypen: Zaehlerstandstyp[]) => zaehlerstandstypenLoaded({ zaehlerstandstypen }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}