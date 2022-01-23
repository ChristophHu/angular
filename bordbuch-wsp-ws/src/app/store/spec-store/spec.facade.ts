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

@Injectable()
export class SpecFacade {
    // public selectors
    allBetankungen$ = this.store.pipe(select(SpecSelectors.selectAllBetankungen)) as Observable<Betankung[]>
    allChecklists$  = this.store.pipe(select(SpecSelectors.selectAllChecklists)) as Observable<Checklist[]>
    allReparaturen$  = this.store.pipe(select(SpecSelectors.selectAllReparaturen)) as Observable<Reparatur[]>
    allReparaturFotos$  = this.store.pipe(select(SpecSelectors.selectAllReparaturFotos)) as Observable<any[]>
    allReparaturFotoCount$ = this.store.pipe(select(SpecSelectors.selectReparaturFotosCount)) as Observable<number>
    allLastStandorte$ = this.store.pipe(select(SpecSelectors.selectAllLastStandorte)) as Observable<Standort[]>
    allStandorte$ = this.store.pipe(select(SpecSelectors.selectAllStandorte)) as Observable<Standort[]>
    allStreifen$  = this.store.pipe(select(SpecSelectors.selectAllStreifen)) as Observable<Streife[]>
    allZaehlerstaende$  = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches

    // betankungen
    loadAllBetankungen() {
        this.store.dispatch(SpecActions.loadAllBetankungen())
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

    // reparaturen
    loadAllReparaturen() {
        this.store.dispatch(SpecActions.loadAllReparaturen())
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
    downloadReparaturFotos( id: string ) {
        this.store.dispatch(SpecActions.downloadReparaturFotos({ id }))
    }
    uploadReparaturFoto( upload: any ) {
        this.store.dispatch(SpecActions.uploadReparaturFoto({ upload }))
    }
    deleteReparaturFoto( id: string ) {
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
    loadAllStreifen() {
        this.store.dispatch(SpecActions.loadAllStreifen())
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
}

export { SpecState }