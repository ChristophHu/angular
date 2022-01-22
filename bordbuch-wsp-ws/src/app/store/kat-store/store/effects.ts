import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Dienststelle } from 'src/app/core/models/dienststelle.model'
import { Kat } from 'src/app/core/models/kat.model'
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk.model'
import { Status } from 'src/app/core/models/reparatur-status.model'
import { Schiff } from 'src/app/core/models/schiff.model'
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model'
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
    loadBetriebsstoffe, loadedBetriebsstoffe, insertBetriebsstoff, insertBetriebsstoffSuccess, updateBetriebsstoff, updateBetriebsstoffSuccess, deleteBetriebsstoff, deleteBetriebsstoffSuccess,
    loadCheckliste, loadedCheckliste, insertChecklist, insertChecklistSuccess, updateChecklist, updateChecklistSuccess, deleteChecklist, deleteChecklistSuccess,
    loadedDienststellen, insertDienststelle, insertDienststelleSuccess, updateDienststelle, updateDienststelleSuccess, deleteDienststelle, deleteDienststelleSuccess,
    loadFunktionen, loadedFunktionen, insertFunktion, insertFunktionSuccess, updateFunktion, updateFunktionSuccess, deleteFunktion, deleteFunktionSuccess,
    loadKennungen, loadedKennungen, insertKennung, insertKennungSuccess, deleteKennung, deleteKennungSuccess, updateKennung, updateKennungSuccess, 
    loadZaehlerstandstypen, loadedZaehlerstandstypen, insertZaehlerstandstyp, insertZaehlerstandstypSuccess, updateZaehlerstandstyp, deleteZaehlerstandstyp, deleteZaehlerstandstypSuccess, updateZaehlerstandstypSuccess,
    loadZweck, insertZweck, updateZweck, deleteZweck, loadedZweck, insertZweckSuccess, updateZweckSuccess, deleteZweckSuccess, loadDienststellen, loadPruefvermerkkategorien, loadedPruefvermerkkategorien, insertPruefvermerkkategorie, insertPruefvermerkkategorieSuccess, updatePruefvermerkkategorie, updatePruefvermerkkategorieSuccess, deletePruefvermerkkategorie, deletePruefvermerkkategorieSuccess, loadPruefvermerke, loadedPruefvermerke, insertPruefvermerk, insertPruefvermerkSuccess, updatePruefvermerk, updatePruefvermerkSuccess, deletePruefvermerk, deletePruefvermerkSuccess, loadSchiffe, loadedSchiffe, insertSchiff, updateSchiff, deleteSchiff, insertSchiffSuccess, updateSchiffSuccess, deleteSchiffSuccess, loadAllStatus, loadedAllStatus, insertStatus, insertStatusSuccess, updateStatus, updateStatusSuccess, deleteStatus, deleteStatusSuccess,
} from './actions'
 
@Injectable()
export class Effects {

    // betriebsstoffe
    loadBetriebsstoffe$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBetriebsstoffe),
            concatMap(action => this.appService.getBetriebsstoffe()),
            map((kat: Kat[]) => loadedBetriebsstoffe({ kat }))
        )
    })
    insertBetriebsstoff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertBetriebsstoff),
            switchMap(action => {
                return this.appService.insertBetriebsstoff(action.insert).pipe(
                    map((id: string) => insertBetriebsstoffSuccess({ action, id }))
                )
            })
        )
    })
    updateBetriebsstoff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateBetriebsstoff),
            switchMap(action => {
                return this.appService.updateBetriebsstoff(action.update).pipe(
                    map(() => updateBetriebsstoffSuccess(action))
                )
            })
        )
    })
    deleteBetriebsstoff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteBetriebsstoff),
            switchMap(action => {
                return this.appService.deleteBetriebsstoff(action.id).pipe(
                    map(() => deleteBetriebsstoffSuccess(action))
                )
            })
        )
    })

    // checkliste
    loadCheckliste$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadCheckliste),
            concatMap(action => this.appService.getCheckliste()),
            map((kat: Kat[]) => loadedCheckliste({ kat }))
        )
    })
    insertChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertChecklist),
            switchMap(action => {
                return this.appService.insertChecklist(action.insert).pipe(
                    map((id: string) => insertChecklistSuccess({ action, id }))
                )
            })
        )
    })
    updateChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateChecklist),
            switchMap(action => {
                return this.appService.updateChecklist(action.update).pipe(
                    map(() => updateChecklistSuccess(action))
                )
            })
        )
    })
    deleteChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteChecklist),
            switchMap(action => {
                return this.appService.deleteChecklist(action.id).pipe(
                    map(() => deleteChecklistSuccess(action))
                )
            })
        )
    })

    // dienststellen
    loadDienststellen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadDienststellen),
            concatMap(action => this.appService.getDienststellen()),
            map((dienststelle: Dienststelle[]) => loadedDienststellen({ dienststelle }))
        )
    })
    insertDienststelle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertDienststelle),
            switchMap(action => {
                return this.appService.insertDienststelle(action.insert).pipe(
                    map((id: string) => insertDienststelleSuccess({ action, id }))
                )
            })
        )
    })
    updateDienststelle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateDienststelle),
            switchMap(action => {
                return this.appService.updateDienststelle(action.update).pipe(
                    map(() => updateDienststelleSuccess(action))
                )
            })
        )
    })
    deleteDienststelle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteDienststelle),
            switchMap(action => {
                return this.appService.deleteDienststelle(action.id).pipe(
                    map(() => deleteDienststelleSuccess(action))
                )
            })
        )
    })

    // funktionen
    loadFunktionen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadFunktionen),
            concatMap(action => this.appService.getFunktionen()),
            map((kat: Kat[]) => loadedFunktionen({ kat }))
        )
    })
    insertFunktion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertFunktion),
            switchMap(action => {
                return this.appService.insertFunktion(action.insert).pipe(
                    map((id: string) => insertFunktionSuccess({ action, id }))
                )
            })
        )
    })
    updateFunktion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateFunktion),
            switchMap(action => {
                return this.appService.updateFunktion(action.update).pipe(
                    map(() => updateFunktionSuccess(action))
                )
            })
        )
    })
    deleteFunktion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteFunktion),
            switchMap(action => {
                return this.appService.deleteFunktion(action.id).pipe(
                    map(() => deleteFunktionSuccess(action))
                )
            })
        )
    })

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

    // pruefvermerke
    loadPruefvermerke$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPruefvermerke),
            concatMap(action => this.appService.getPruefvermerke()),
            map((pruefvermerk: Pruefvermerk[]) => loadedPruefvermerke({ pruefvermerk }))
        )
    })
    insertPruefvermerk$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPruefvermerk),
            switchMap(action => {
                return this.appService.insertPruefvermerk(action.insert).pipe(
                    map((id: string) => insertPruefvermerkSuccess({ action, id }))
                )
            })
        )
    })
    updatePruefvermerk$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePruefvermerk),
            switchMap(action => {
                return this.appService.updatePruefvermerk(action.update).pipe(
                    map(() => updatePruefvermerkSuccess(action))
                )
            })
        )
    })
    deletePruefvermerk$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePruefvermerk),
            switchMap(action => {
                return this.appService.deletePruefvermerk(action.id).pipe(
                    map(() => deletePruefvermerkSuccess(action))
                )
            })
        )
    })

    // pruefvermerkkategorien
    loadPruefvermerkkategorien$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPruefvermerkkategorien),
            concatMap(action => this.appService.getPruefvermerkkategorien()),
            map((kat: Kat[]) => loadedPruefvermerkkategorien({ kat }))
        )
    })
    insertPruefvermerkkategorie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPruefvermerkkategorie),
            switchMap(action => {
                return this.appService.insertPruefvermerkkategorie(action.insert).pipe(
                    map((id: string) => insertPruefvermerkkategorieSuccess({ action, id }))
                )
            })
        )
    })
    updatePruefvermerkkategorie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePruefvermerkkategorie),
            switchMap(action => {
                return this.appService.updatePruefvermerkkategorie(action.update).pipe(
                    map(() => updatePruefvermerkkategorieSuccess(action))
                )
            })
        )
    })
    deletePruefvermerkkategorie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePruefvermerkkategorie),
            switchMap(action => {
                return this.appService.deletePruefvermerkkategorie(action.id).pipe(
                    map(() => deletePruefvermerkkategorieSuccess(action))
                )
            })
        )
    })

    // schiffe
    loadSchiffe$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadSchiffe),
            concatMap(action => this.appService.getSchiffe()),
            map((schiffe: Schiff[]) => loadedSchiffe({ schiffe }))
        )
    })
    insertSchiff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertSchiff),
            switchMap(action => {
                return this.appService.insertSchiff(action.insert).pipe(
                    map((id: string) => insertSchiffSuccess({ action, id }))
                )
            })
        )
    })
    updateSchiff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateSchiff),
            switchMap(action => {
                return this.appService.updateSchiff(action.update).pipe(
                    map(() => updateSchiffSuccess(action))
                )
            })
        )
    })
    deleteSchiff$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteSchiff),
            switchMap(action => {
                return this.appService.deleteSchiff(action.id).pipe(
                    map(() => deleteSchiffSuccess(action))
                )
            })
        )
    })

    // status
    loadAllStatus$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllStatus),
            concatMap(action => this.appService.getStatus()),
            map((status: Status[]) => loadedAllStatus({ status }))
        )
    })
    insertStatus$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertStatus),
            switchMap(action => {
                return this.appService.insertStatus(action.insert).pipe(
                    map((id: string) => insertStatusSuccess({ action, id }))
                )
            })
        )
    })
    updateStatus$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateStatus),
            switchMap(action => {
                return this.appService.updateStatus(action.update).pipe(
                    map(() => updateStatusSuccess(action))
                )
            })
        )
    })
    deleteStatus$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteStatus),
            switchMap(action => {
                return this.appService.deleteStatus(action.id).pipe(
                    map(() => deleteStatusSuccess(action))
                )
            })
        )
    })

    // zaehlerstandstypen
    loadZaehlerstandstypen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadZaehlerstandstypen),
            concatMap(action => this.appService.getZaehlerstandstypen()),
            tap(value => console.log(value)),
            map((kat: Zaehlerstandstyp[]) => loadedZaehlerstandstypen({ kat }))
        )
    })
    insertZaehlerstandstyp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertZaehlerstandstyp),
            switchMap(action => {
                return this.appService.insertZaehlerstandstyp(action.insert).pipe(
                    map((id: string) => insertZaehlerstandstypSuccess({ action, id }))
                )
            })
        )
    })
    updateZaehlerstandstyp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateZaehlerstandstyp),
            switchMap(action => {
                return this.appService.updateZaehlerstandstyp(action.update).pipe(
                    map(() => updateZaehlerstandstypSuccess(action))
                )
            })
        )
    })
    deleteZaehlerstandstyp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteZaehlerstandstyp),
            switchMap(action => {
                return this.appService.deleteZaehlerstandstyp(action.id).pipe(
                    map(() => deleteZaehlerstandstypSuccess(action))
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