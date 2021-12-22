import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Kat } from 'src/app/core/models/kat.model'
import { AppService } from 'src/app/core/services/app.service'
// import { Betriebsstoff } from 'src/app/core/model/Betriebsstoff.model'
// import { Checklistitem } from 'src/app/core/model/checklistitem.model'
// import { Dienststelle } from 'src/app/core/model/dienststelle.model'
// import { Funktion } from 'src/app/core/model/funktion.model'
// import { Kennung } from 'src/app/core/model/kennung.model'
// import { PruefvermerkKategorien } from 'src/app/core/model/pruefvermerk-kategorie.model'
// import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model'
// import { ShipSelection } from 'src/app/core/model/ship-selection.model'
// import { Zaehlerstandstyp } from 'src/app/core/model/zaehlerstandstyp'
// import { Zweck } from 'src/app/core/model/zwecke.model'
// import { AppService } from 'src/app/core/services/app.service'
import { 
    loadKennungen, loadedKennungen, insertKennung, insertKennungSuccess, deleteKennung, deleteKennungSuccess, updateKennung, updateKennungSuccess, 
    loadZweck, insertZweck, updateZweck, deleteZweck, loadedZweck, insertZweckSuccess, updateZweckSuccess, deleteZweckSuccess 
} from './actions'
// loadAllShip, allShipLoaded, loadPruefvermerke, pruefvermerkeLoaded, loadPruefvermerkKategorien, pruefvermerkKategorienLoaded, loadZaehlerstandstypen, zaehlerstandstypenLoaded, loadDienststellen, dienststellenLoaded, loadZwecke, loadedZwecke, loadBetriebsstoffe, loadedBetriebsstoffe, loadFunktionen, loadedFunktionen 
 
@Injectable()
export class Effects {
    // loadAllShip$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadAllShip),
    //         concatMap(action => this.appService.getSchiffe()),
    //         map((shipSelection: ShipSelection[]) => allShipLoaded({ shipSelection }))
    //     )
    // })
    // loadPruefvermerke$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadPruefvermerke),
    //         concatMap(action => this.appService.getPruefvermerke()),
    //         map((pruefvermerke: Pruefvermerk[]) => pruefvermerkeLoaded({ pruefvermerke }))
    //     )
    // })
    // loadPruefvermerkKategorien$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadPruefvermerkKategorien),
    //         concatMap(action => this.appService.getPruefvermerkKategorien()),
    //         map((pruefvermerkKategorien: PruefvermerkKategorien[]) => pruefvermerkKategorienLoaded({ pruefvermerkKategorien }))
    //     )
    // })
    // loadZaehlerstandstypen$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadZaehlerstandstypen),
    //         concatMap(action => this.appService.getZaehlerstandstypen()),
    //         map((zaehlerstandstypen: Zaehlerstandstyp[]) => zaehlerstandstypenLoaded({ zaehlerstandstypen }))
    //     )
    // })
    // loadDienststellen$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadDienststellen),
    //         concatMap(action => this.appService.getDienststellen()),
    //         map((dienststellen: Dienststelle[]) => dienststellenLoaded({ dienststellen }))
    //     )
    // })
    // loadBetriebsstoffe$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadBetriebsstoffe),
    //         concatMap(action => this.appService.getBetriebsstoffe()),
    //         map((betriebsstoffe: Betriebsstoff[]) => loadedBetriebsstoffe({ betriebsstoffe }))
    //     )
    // })
    // loadFunktionen$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadFunktionen),
    //         concatMap(action => this.appService.getFunktionen()),
    //         map((funktionen: Funktion[]) => loadedFunktionen({ funktionen }))
    //     )
    // })

    // kennungen
    loadKennungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadKennungen),
            concatMap(action => this.appService.getKennungen()),
            map((kat: Kat[]) => loadedKennungen({ kat }))
        )
    })
    insertKennungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertKennung),
            switchMap(action => {
                return this.appService.insertKennung(action.insert).pipe(
                    map((id: string) => insertKennungSuccess({ action, id }))
                )
            })
        )
    })
    updateKennung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateKennung),
            switchMap(action => {
                return this.appService.updateKennung(action.update).pipe(
                    map(() => updateKennungSuccess(action))
                )
            })
        )
    })
    deleteKennung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteKennung),
            switchMap(action => {
                return this.appService.deleteKennung(action.id).pipe(
                    map(() => deleteKennungSuccess(action))
                )
            })
        )
    })

    // zweck
    loadZweck$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadZweck),
            concatMap(action => this.appService.getZweck()),
            map((kat: Kat[]) => loadedZweck({ kat }))
        )
    })
    insertZweck$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertZweck),
            switchMap(action => {
                return this.appService.insertZweck(action.insert).pipe(
                    map((id: string) => insertZweckSuccess({ action, id }))
                )
            })
        )
    })
    updateZweck$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateZweck),
            switchMap(action => {
                return this.appService.updateZweck(action.update).pipe(
                    map(() => updateZweckSuccess(action))
                )
            })
        )
    })
    deleteZweck$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteZweck),
            switchMap(action => {
                return this.appService.deleteZweck(action.id).pipe(
                    map(() => deleteZweckSuccess(action))
                )
            })
        )
    })

    constructor(private actions$: Actions, private appService: AppService ) {}
}