import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap, tap } from 'rxjs'
import { Betankung } from 'src/app/core/models/betankung'
import { Checklist } from 'src/app/core/models/checklist.model'
import { Klarmeldung } from 'src/app/core/models/klarmeldung.model'
import { Peilung } from 'src/app/core/models/peilung.model'
import { Reparatur } from 'src/app/core/models/reparatur.model'
import { Standort } from 'src/app/core/models/standort.model'
import { Streife } from 'src/app/core/models/streife.model'
import { Tank } from 'src/app/core/models/tank.model'
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model'
import { AppService } from 'src/app/core/services/app.service'

import {
    loadAllShipChecklists, loadedAllShipChecklists, insertShipChecklist, insertShipChecklistSuccess, deleteShipChecklist, deleteShipChecklistSuccess,
    loadAllBetankungen, loadedAllBetankungen, insertBetankung, updateBetankung, deleteBetankung, insertBetankungSuccess, updateBetankungSuccess, deleteBetankungSuccess,
    loadAllZaehlerstaende, loadedAllZaehlerstaende, insertZaehlerstand, insertZaehlerstandSuccess, updateZaehlerstand, updateZaehlerstandSuccess, deleteZaehlerstand, deleteZaehlerstandSuccess, 
    loadAllReparaturen, loadedAllReparaturen, insertReparatur, insertReparaturSuccess, updateReparatur, updateReparaturSuccess, deleteReparatur, deleteReparaturSuccess,
    loadAllStreifen, loadedAllStreifen, insertStreife, insertStreifeSuccess, updateStreife, updateStreifeSuccess, deleteStreife, deleteStreifeSuccess,
    loadAllLastStandorte, loadedAllLastStandorte, loadAllStandorte, loadedAllStandorte, insertStandort, insertStandortSuccess, updateStandort, updateStandortSuccess, deleteStandort, deleteStandortSuccess, uploadReparaturFoto, uploadReparaturFotoSuccess, downloadReparaturFotos, downloadReparaturFotosSuccess, deleteReparaturFoto, deleteReparaturFotoSuccess, loadTanks, loadedTanks, insertTank, insertTankSuccess, updateTank, updateTankSuccess, deleteTank, deleteTankSuccess, insertPeilung, insertPeilungSuccess, updatePeilung, updatePeilungSuccess, deletePeilung, deletePeilungSuccess, loadPeilungenById, loadPeilungenByIdSuccess, loadPeilungen, loadPeilungenSuccess, insertKlarmeldung, insertKlarmeldungSuccess, updateKlarmeldung, updateKlarmeldungSuccess, deleteKlarmeldung, deleteKlarmeldungSuccess, loadAllKlarmeldungen, loadAllKlarmeldungenSuccess, loadAllInstandsetzungen, loadAllInstandsetzungenSuccess, insertInstandsetzung, insertInstandsetzungSuccess, updateInstandsetzung, updateInstandsetzungSuccess, deleteInstandsetzung, deleteInstandsetzungSuccess,
} from './actions'
 
@Injectable()
export class Effects {

    // betankungen
    loadAllBetankungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllBetankungen),
            switchMap(action => {
                return this.appService.getAllBetankungen(action.filter).pipe(
                    map((betankungen: Betankung[]) => loadedAllBetankungen({ betankungen }))
                )
            })
        )
    })
    insertBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertBetankung),
            switchMap(action => {
                return this.appService.insertBetankung(action.insert).pipe(
                    map((id: string) => insertBetankungSuccess({ action, id }))
                )
            })
        )
    })
    updateBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateBetankung),
            switchMap(action => {
                return this.appService.updateBetankung(action.update).pipe(
                    map((id: string) => updateBetankungSuccess({ action, id }))
                )
            })
        )
    })
    deleteBetankung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteBetankung),
            switchMap(action => {
                return this.appService.deleteBetankung(action.id).pipe(
                    map(() => deleteBetankungSuccess(action))
                )
            })
        )
    })

    // checklist
    loadAllShipChecklists$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllShipChecklists),
            concatMap(action => this.appService.getAllShipChecklists()),
            map((checklists: Checklist[]) => loadedAllShipChecklists({ checklists }))
        )
    })
    insertChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertShipChecklist),
            switchMap(action => {
                return this.appService.insertShipChecklist(action.insert).pipe(
                    map((id: string) => insertShipChecklistSuccess({ action, id }))
                )
            })
        )
    })
    deleteShipChecklist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteShipChecklist),
            switchMap(action => {
                return this.appService.deleteShipChecklist(action.id, action.date).pipe(
                    map(() => deleteShipChecklistSuccess(action))
                )
            })
        )
    })

    // Instandsetzung
    loadAllInstandsetzungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllInstandsetzungen),
            switchMap(action => {
                return this.appService.getInstandsetzungen().pipe(
                    map((instandsetzungen: Klarmeldung[]) => loadAllInstandsetzungenSuccess({ instandsetzungen }))
                )
            })
        )
    })
    insertInstandsetzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertInstandsetzung),
            switchMap(action => {
                return this.appService.insertInstandsetzung(action.insert).pipe(
                    map((id: string) => insertInstandsetzungSuccess({ action, id }))
                )
            })
        )
    })
    updateInstandsetzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateInstandsetzung),
            switchMap(action => {
                return this.appService.updateInstandsetzung(action.update).pipe(
                    map(() => updateInstandsetzungSuccess({ update: action.update }))
                )
            })
        )
    })
    deleteInstandsetzung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteInstandsetzung),
            switchMap(action => {
                return this.appService.deleteInstandsetzung(action.id).pipe(
                    map(() => deleteInstandsetzungSuccess(action))
                )
            })
        )
    })

    // Klarmeldung
    // loadKlarmeldungByIdSchiff$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(loadKlarmeldungByIdSchiff),
    //         concatMap(action => this.appService.loadKlarmeldungByIdSchiff(action.id)),
    //         map((klarmeldung: Klarmeldung) => loadKlarmeldungByIdSchiffSuccess({ klarmeldung }))
    //     )
    // })
    loadAllKlarmeldungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllKlarmeldungen),
            concatMap(action => this.appService.getKlarmeldungen()),
            map((klarmeldungen: Klarmeldung[]) => loadAllKlarmeldungenSuccess({ klarmeldungen }))
        )
    })
    insertKlarmeldung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertKlarmeldung),
            switchMap(action => {
                return this.appService.insertKlarmeldung(action.insert).pipe(
                    map((id: string) => insertKlarmeldungSuccess({ action, id }))
                )
            })
        )
    })
    updateKlarmeldung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateKlarmeldung),
            switchMap(action => {
                return this.appService.updateKlarmeldung(action.update).pipe(
                    map(() => updateKlarmeldungSuccess({ update: action.update }))
                )
            })
        )
    })
    deleteKlarmeldung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteKlarmeldung),
            switchMap(action => {
                return this.appService.deleteKlarmeldung(action.id).pipe(
                    map(() => deleteKlarmeldungSuccess(action))
                )
            })
        )
    })

    // peilungen
    loadPeilungenById$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPeilungenById),
            concatMap(action => this.appService.getPeilungById(action.id)),
            map((peilungen: Peilung[]) => loadPeilungenByIdSuccess({ peilungen }))
        )
    })
    loadPeilungen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPeilungen),
            switchMap(action => {
                return this.appService.getPeilungenAll(action.filter).pipe(
                    map((peilungen: Peilung[]) => loadPeilungenSuccess({ peilungen }))
                )
            })
        )
    })
    insertPeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertPeilung),
            switchMap(action => {
                return this.appService.insertPeilung(action.insert).pipe(
                    map(id => insertPeilungSuccess({ action, id }))
                )
            })
        )
    })
    updatePeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePeilung),
            switchMap(action => {
                return this.appService.updatePeilung(action.update).pipe(
                    map((id: string) => updatePeilungSuccess({ action, id }))
                )
            })
        )
    })
    deletePeilung$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePeilung),
            switchMap(action => {
                return this.appService.deletePeilung(action.id).pipe(
                    map(() => deletePeilungSuccess(action))
                )
            })
        )
    })

    // reparaturen
    loadAllReparaturen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllReparaturen),
            switchMap(action => {
                return this.appService.getAllReparaturen(action.filter).pipe(
                    map((reparaturen: Reparatur[]) => loadedAllReparaturen({ reparaturen }))
                )
            })
        )
    })
    insertReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertReparatur),
            switchMap(action => {
                return this.appService.insertReparatur(action.insert).pipe(
                    map(id => insertReparaturSuccess({ action, id }))
                )
            })
        )
    })
    updateReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateReparatur),
            switchMap(action => {
                return this.appService.updateReparatur(action.update).pipe(
                    map((id: string) => updateReparaturSuccess({ action, id }))
                )
            })
        )
    })
    deleteReparatur$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteReparatur),
            switchMap(action => {
                return this.appService.deleteReparatur(action.id).pipe(
                    map(() => deleteReparaturSuccess(action))
                )
            })
        )
    })

    // reparaturfotos
    downloadReparaturFotos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(downloadReparaturFotos),
            concatMap(action => this.appService.downloadReparaturFoto(action.id)),
            map((fotos: any[]) => downloadReparaturFotosSuccess({ fotos }))
        )
    })
    uploadReparaturFoto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(uploadReparaturFoto),
            switchMap(action => {
                return this.appService.uploadReparaturFoto(action.upload).pipe(
                    map((id: string) => uploadReparaturFotoSuccess({ action, id }))
                )
            })
        )
    })
    deleteReparaturFoto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteReparaturFoto),
            switchMap(action => {
                return this.appService.deleteReparaturFoto(action.id).pipe(
                    map(() => deleteReparaturFotoSuccess(action))
                )
            })
        )
    })

    // laststandort
    loadAllLastStandorte$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllLastStandorte),
            concatMap(action => this.appService.getAllLastStandorte()),
            map((laststandorte: Standort[]) => loadedAllLastStandorte({ laststandorte }))
        )
    })

    // standorte
    loadAllStandorteVonStreife$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllStandorte),
            concatMap(action => this.appService.getAllStandorteVonStreife(action.id)),
            map((standorte: Standort[]) => loadedAllStandorte({ standorte }))
        )
    })
    insertStandort$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertStandort),
            switchMap(action => {
                return this.appService.insertStandort(action.insert).pipe(
                    map(id => insertStandortSuccess({ action, id }))
                )
            })
        )
    })
    updateStandort$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateStandort),
            switchMap(action => {
                return this.appService.updateStandort(action.update).pipe(
                    map((id: string) => updateStandortSuccess({ action, id }))
                )
            })
        )
    })
    deleteStandort$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteStandort),
            switchMap(action => {
                return this.appService.deleteStandort(action.id).pipe(
                    map(() => deleteStandortSuccess(action))
                )
            })
        )
    })

    // streifen
    loadAllStreifen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllStreifen),
            switchMap(action => {
                return this.appService.getAllStreifen(action.filter).pipe(
                    map((streifen: Streife[]) => loadedAllStreifen({ streifen }))
                )
            })
        )
    })
    insertStreife$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertStreife),
            switchMap(action => {
                return this.appService.insertStreife(action.insert).pipe(
                    map(id => insertStreifeSuccess({ action, id }))
                )
            })
        )
    })
    updateStreife$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateStreife),
            switchMap(action => {
                return this.appService.updateStreife(action.update).pipe(
                    map((id: string) => updateStreifeSuccess({ action, id }))
                )
            })
        )
    })
    deleteStreife$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteStreife),
            switchMap(action => {
                return this.appService.deleteStreife(action.id).pipe(
                    map(() => deleteStreifeSuccess(action))
                )
            })
        )
    })

    // tanks
    loadTanks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadTanks),
            concatMap(action => this.appService.getTanks()),
            map((tanks: Tank[]) => loadedTanks({ tanks }))
        )
    })
    insertTank$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertTank),
            switchMap(action => {
                return this.appService.insertTank(action.insert).pipe(
                    map(id => insertTankSuccess({ action, id }))
                )
            })
        )
    })
    updateTank$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateTank),
            switchMap(action => {
                return this.appService.updateTank(action.update).pipe(
                    map((id: string) => updateTankSuccess({ action, id }))
                )
            })
        )
    })
    deleteTank$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteTank),
            switchMap(action => {
                return this.appService.deleteTank(action.id).pipe(
                    map(() => deleteTankSuccess(action))
                )
            })
        )
    })

    // zaehlerstaende
    loadAllZaehlerstaende$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllZaehlerstaende),
            concatMap(action => this.appService.getAllZaehlerstaende()),
            map((zaehlerstaende: Zaehlerstand[]) => loadedAllZaehlerstaende({ zaehlerstaende }))
        )
    })
    insertZaehlerstand$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(insertZaehlerstand),
            switchMap(action => {
                return this.appService.insertZaehlerstand(action.insert).pipe(
                    map((id: string) => insertZaehlerstandSuccess({ action, id }))
                )
            })
        )
    })
    updateZaehlerstand$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateZaehlerstand),
            switchMap(action => {
                return this.appService.updateZaehlerstand(action.update).pipe(
                    map((id: string) => updateZaehlerstandSuccess({ action, id }))
                )
            })
        )
    })
    deleteZaehlerstand$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteZaehlerstand),
            switchMap(action => {
                return this.appService.deleteZaehlerstand(action.id).pipe(
                    map(() => deleteZaehlerstandSuccess(action))
                )
            })
        )
    })

    constructor(private actions$: Actions, private appService: AppService) {}
}
