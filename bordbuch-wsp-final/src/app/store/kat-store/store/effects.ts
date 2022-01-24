import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Betriebsstoff } from 'src/app/core/model/Betriebsstoff.model'
import { Checklistitem } from 'src/app/core/model/checklistitem.model'
import { Dienststelle } from 'src/app/core/model/dienststelle.model'
import { Funktion } from 'src/app/core/model/funktion.model'
import { Kennung } from 'src/app/core/model/kennung.model'
import { PruefvermerkKategorien } from 'src/app/core/model/pruefvermerk-kategorie.model'
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model'
import { ShipSelection } from 'src/app/core/model/ship-selection.model'
import { Zaehlerstandstyp } from 'src/app/core/model/zaehlerstandstyp'
import { Zweck } from 'src/app/core/model/zwecke.model'
import { AppService } from 'src/app/core/services/app.service'
import { loadAllShip, allShipLoaded, loadPruefvermerke, pruefvermerkeLoaded, loadPruefvermerkKategorien, pruefvermerkKategorienLoaded, loadZaehlerstandstypen, zaehlerstandstypenLoaded, loadDienststellen, dienststellenLoaded, loadZwecke, loadedZwecke, loadKennungen, loadedKennungen, loadBetriebsstoffe, loadedBetriebsstoffe, loadFunktionen, loadedFunktionen } from './actions'
 
@Injectable()
export class Effects {
    loadShips$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllShip),
            concatMap(action => this.appService.getSchiffe()),
            tap(data => console.log(data)),
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
    loadBetriebsstoffe$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBetriebsstoffe),
            concatMap(action => this.appService.getBetriebsstoffe()),
            map((betriebsstoffe: Betriebsstoff[]) => loadedBetriebsstoffe({ betriebsstoffe }))
        )
    })
    loadFunktionen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadFunktionen),
            concatMap(action => this.appService.getFunktionen()),
            map((funktionen: Funktion[]) => loadedFunktionen({ funktionen }))
        )
    })
    loadKennungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadKennungen),
            concatMap(action => this.appService.getKennungen()),
            map((kennungen: Kennung[]) => loadedKennungen({ kennungen }))
        )
    })
    loadZwecke$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadZwecke),
            concatMap(action => this.appService.getZwecke()),
            map((zwecke: Zweck[]) => loadedZwecke({ zwecke }))
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}