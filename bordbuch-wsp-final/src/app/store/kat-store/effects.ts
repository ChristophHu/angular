import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap } from 'rxjs/operators'
import { Checklistitem } from 'src/app/core/model/checklistitem.model'
import { Dienststelle } from 'src/app/core/model/dienststelle.model'
import { PruefvermerkKategorien } from 'src/app/core/model/pruefvermerk-kategorie.model'
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model'
import { ShipSelection } from 'src/app/core/model/ship-selection.model'
import { Zaehlerstandstyp } from 'src/app/core/model/zaehlerstandstyp'
import { AppService } from 'src/app/core/services/app.service'
import { loadAllShip, allShipLoaded, loadPruefvermerke, pruefvermerkeLoaded, loadPruefvermerkKategorien, pruefvermerkKategorienLoaded, loadZaehlerstandstypen, zaehlerstandstypenLoaded, loadDienststellen, dienststellenLoaded, loadChecklistItems, loadedChecklistItems, updateChecklistItem } from './actions'
 
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
    loadPruefvermerkKategorien$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPruefvermerkKategorien),
            concatMap(action => this.appService.getPruefvermerkKategorien()),
            map((pruefvermerkKategorien: PruefvermerkKategorien[]) => pruefvermerkKategorienLoaded({ pruefvermerkKategorien }))
        )
    })
    loadZaehlerstandstypen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadZaehlerstandstypen),
            concatMap(action => this.appService.getZaehlerstandstypen()),
            map((zaehlerstandstypen: Zaehlerstandstyp[]) => zaehlerstandstypenLoaded({ zaehlerstandstypen }))
        )
    })
    loadDienststellen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadDienststellen),
            concatMap(action => this.appService.getDienststellen()),
            map((dienststellen: Dienststelle[]) => dienststellenLoaded({ dienststellen }))
        )
    })
    loadChecklistItems$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadChecklistItems),
            concatMap(action => this.appService.getChecklistItems('1')),
            map((items: Checklistitem[]) => loadedChecklistItems({ items }))
        )
    })

    updateChecklistItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateChecklistItem),
            // switchMap(action => {
            //     return this.appService.updateChecklistItem(action.item)
            // })
        )
    }, { dispatch: false })

    constructor(private actions$: Actions, private appService: AppService ) {}
}