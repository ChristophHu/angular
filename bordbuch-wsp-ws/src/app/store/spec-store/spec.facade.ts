import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'
import * as SpecState from './store/reducers'
import { Observable } from "rxjs";

import { Checklist } from "src/app/core/models/checklist.model";
import { Betankung } from "src/app/core/models/betankung";
import { Zaehlerstand } from "src/app/core/models/zaehlerstand.model";
import { Reparatur } from "src/app/core/models/reparatur.model";
import { Streife } from "src/app/core/models/streife.model";
import { Standort } from "src/app/core/models/standort.model";
import { Tank } from "src/app/core/models/tank.model";
import { Peilung } from "src/app/core/models/peilung.model";
import { Filter } from "src/app/core/models/filter.model";
import { Klarmeldung } from "src/app/core/models/klarmeldung.model";
import { Instandsetzung } from "src/app/core/models/Instandsetzung.model";

@Injectable()
export class SpecFacade {
    // public selectors
    allBetankungen$     = this.store.pipe(select(SpecSelectors.selectAllBetankungen)) as Observable<Betankung[]>
    allChecklists$      = this.store.pipe(select(SpecSelectors.selectAllChecklists)) as Observable<Checklist[]>
    allPeilungen$       = this.store.pipe(select(SpecSelectors.selectAllPeilungen)) as Observable<Peilung[]>
    allReparaturen$     = this.store.pipe(select(SpecSelectors.selectAllReparaturen)) as Observable<Reparatur[]>
    allReparaturFotos$  = this.store.pipe(select(SpecSelectors.selectAllReparaturFotos)) as Observable<any[]>
    allReparaturFotoCount$ = this.store.pipe(select(SpecSelectors.selectReparaturFotosCount)) as Observable<number>
    allInstandsetzungen$ = this.store.pipe(select(SpecSelectors.selectInstandsetzungen)) as Observable<Instandsetzung[]>
    allKlarmeldungen$   = this.store.pipe(select(SpecSelectors.selectKlarmeldungen)) as Observable<Klarmeldung[]>
    allLastStandorte$   = this.store.pipe(select(SpecSelectors.selectAllLastStandorte)) as Observable<Standort[]>
    allStandorte$       = this.store.pipe(select(SpecSelectors.selectAllStandorte)) as Observable<Standort[]>
    allStreifen$        = this.store.pipe(select(SpecSelectors.selectAllStreifen)) as Observable<Streife[]>
    allTanks$           = this.store.pipe(select(SpecSelectors.selectTanks)) as Observable<Tank[]>
    allZaehlerstaende$  = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // resetStore
    resetStore() {
        this.store.dispatch(SpecActions.resetStore())
    }

    // betankungen
    loadAllBetankungen(filter: Filter) {
        this.store.dispatch(SpecActions.loadAllBetankungen({ filter }))
    }
    insertBetankung(insert: Betankung) {
        this.store.dispatch(SpecActions.insertBetankung({ insert }))
    }
    updateBetankung(update: Betankung) {
        this.store.dispatch(SpecActions.updateBetankung({ update }))
    }
    deleteBetankung(id: string) {
        this.store.dispatch(SpecActions.deleteBetankung({ id }))
    }

    // checklists
    loadAllChecklists() {
        this.store.dispatch(SpecActions.loadAllShipChecklists())
    }
    insertChecklist(insert: Checklist) {
        this.store.dispatch(SpecActions.insertShipChecklist({ insert }))
    }
    deleteChecklist(id: string, date: string) {
        this.store.dispatch(SpecActions.deleteShipChecklist({ id, date }))
    }
    getChecklistById(id: string): Observable<Checklist | undefined> {
        return this.store.pipe(select(SpecSelectors.selectChecklistByIdSchiff(id)))
    }

    // Instandsetzung
    loadAllInstandsetzung() {
        this.store.dispatch(SpecActions.loadAllInstandsetzungen())
    }
    insertInstandsetzung(insert: Instandsetzung) {
        this.store.dispatch(SpecActions.insertInstandsetzung({ insert }))
    }
    updateInstandsetzung(update: Instandsetzung) {
        this.store.dispatch(SpecActions.updateInstandsetzung({ update }))
    }
    deleteInstandsetzung(id: string) {
        this.store.dispatch(SpecActions.deleteInstandsetzung({ id }))
    }

    // Klarmeldung
    loadAllKlarmeldungen() {
        this.store.dispatch(SpecActions.loadAllKlarmeldungen())
    }
    insertKlarmeldung(insert: Klarmeldung) {
        this.store.dispatch(SpecActions.insertKlarmeldung({ insert }))
    }
    updateKlarmeldung(update: Klarmeldung) {
        this.store.dispatch(SpecActions.updateKlarmeldung({ update }))
    }
    deleteKlarmeldung(id: string) {
        this.store.dispatch(SpecActions.deleteKlarmeldung({ id }))
    }

    // peilungen
    loadPeilungenById(id: string) {
        this.store.dispatch(SpecActions.loadPeilungenById({ id }))
    }
    loadAllPeilungen(filter: Filter) {
        this.store.dispatch(SpecActions.loadPeilungen({ filter }))
    }
    insertPeilung(insert: Peilung) {
        this.store.dispatch(SpecActions.insertPeilung({ insert }))
    }
    updatePeilung(update: Peilung) {
        this.store.dispatch(SpecActions.updatePeilung({ update }))
    }
    deletePeilung(id: string,) {
        this.store.dispatch(SpecActions.deletePeilung({ id }))
    }

    // reparaturen
    loadAllReparaturen(filter: Filter) {
        this.store.dispatch(SpecActions.loadAllReparaturen({ filter }))
    }
    insertReparatur(insert: Reparatur) {
        this.store.dispatch(SpecActions.insertReparatur({ insert }))
    }
    updateReparatur(update: Reparatur) {
        this.store.dispatch(SpecActions.updateReparatur({ update }))
    }
    deleteReparatur(id: string,) {
        this.store.dispatch(SpecActions.deleteReparatur({ id }))
    }
    getReparaturen(status: string): Observable<Reparatur[] | undefined> {
        return this.store.pipe(select(SpecSelectors.selectReparaturen(status)))
    }
    clearReparaturen() {
        this.store.dispatch(SpecActions.clearReparaturen())
    }
    getReparaturFotosById(id: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectReparaturFotosById(id)))
    }
    downloadReparaturFotos(id: string) {
        this.store.dispatch(SpecActions.downloadReparaturFotos({ id }))
    }
    uploadReparaturFoto(upload: any) {
        this.store.dispatch(SpecActions.uploadReparaturFoto({ upload }))
    }
    deleteReparaturFoto(id: string) {
        this.store.dispatch(SpecActions.deleteReparaturFoto({ id }))
    }
    
    // laststandorte
    loadAllLastStandorte() {
        this.store.dispatch(SpecActions.loadAllLastStandorte())
    }

    // standorte
    loadAllStandorte(id: string) {
        this.store.dispatch(SpecActions.loadAllStandorte({ id }))
    }
    insertStandort(insert: Standort) {
        this.store.dispatch(SpecActions.insertStandort({ insert }))
    }
    updateStandort(update: Standort) {
        this.store.dispatch(SpecActions.updateStandort({ update }))
    }
    deleteStandort(id: string,) {
        this.store.dispatch(SpecActions.deleteStandort({ id }))
    }

    // streifen
    loadAllStreifen(filter: Filter) {
        this.store.dispatch(SpecActions.loadAllStreifen({ filter }))
    }
    insertStreife(insert: Streife) {
        this.store.dispatch(SpecActions.insertStreife({ insert }))
    }
    updateStreife(update: Streife) {
        this.store.dispatch(SpecActions.updateStreife({ update }))
    }
    deleteStreife(id: string,) {
        this.store.dispatch(SpecActions.deleteStreife({ id }))
    }
    getStreifen(status: string): Observable<Streife[] | undefined> {
        return this.store.pipe(select(SpecSelectors.selectStreifen(status)))
    }
    getStreifeById(id_streife: string): Observable<Streife | undefined> {
        return this.store.pipe(select(SpecSelectors.selectStreifeById(id_streife)))
    }

    // tanks
    loadTanks() {
        this.store.dispatch(SpecActions.loadTanks())
    }
    // loadTanks(id: string) {
    //     this.store.dispatch(SpecActions.loadTanks({ id }))
    // }
    insertTank(insert: Tank) {
        this.store.dispatch(SpecActions.insertTank({ insert }))
    }
    updateTank(update: Tank) {
        this.store.dispatch(SpecActions.updateTank({ update }))
    }
    deleteTank(id: string,) {
        this.store.dispatch(SpecActions.deleteTank({ id }))
    }
    // getTankById(id: string): Observable<Tank[] | undefined> {
    //     return this.store.pipe(select(SpecSelectors.selectTanks))
    // }
    getTankByIDShip(id: string): Observable<Tank[] | undefined> {
        return this.store.pipe(select(SpecSelectors.selectTankByIDShip(id)))
    }
    getTankById(id: string): Observable<string | undefined> {
        return this.store.pipe(select(SpecSelectors.selectTankByID(id)))
    }
    getIdByTank(bezeichnung: string): Observable<string | undefined> {
        return this.store.pipe(select(SpecSelectors.selectIdByTank(bezeichnung)))
    }

    // zaehlerstaende
    loadAllZaehlerstaende() {
        this.store.dispatch(SpecActions.loadAllZaehlerstaende())
    }
    insertZaehlerstand(insert: Zaehlerstand) {
        this.store.dispatch(SpecActions.insertZaehlerstand({ insert }))
    }
    updateZaehlerstand(update: Zaehlerstand) {
        this.store.dispatch(SpecActions.updateZaehlerstand({ update }))
    }
    deleteZaehlerstand(id: string) {
        this.store.dispatch(SpecActions.deleteZaehlerstand({ id }))
    }
    getZaehlerstaendeById(id: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectZaehlerstaendeById(id)))
    }
    getDurchsichtByNameZaehlerstandstyp(name: string, zaehlerstandstyp: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectDurchsichtByNameZaehlerstandstyp(name, zaehlerstandstyp)))
    }
}

export { SpecState }