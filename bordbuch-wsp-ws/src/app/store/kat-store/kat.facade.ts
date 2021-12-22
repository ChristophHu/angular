import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as KatAction from './store/actions'
import * as KatSelectors from './store/selectors'
import * as KatState from './store/reducers'
import { Observable } from "rxjs";

import { Kat } from "src/app/core/models/kat.model";

@Injectable()
export class KatFacade {
    // public selectors
    kennungen$  = this.store.pipe(select(KatSelectors.selectAllKennungen)) as Observable<Kat[]>
    zweck$      = this.store.pipe(select(KatSelectors.selectAllZwecke)) as Observable<Kat[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // checkliste
    loadCheckliste() {
        this.store.dispatch(KatAction.loadCheckliste())
    }
    insertCheckliste(insert: Kat) {
        this.store.dispatch(KatAction.insertCheckliste({ insert }))
    }
    updateCheckliste(update: Kat) {
        this.store.dispatch(KatAction.updateCheckliste({ update }))
    }
    deleteCheckliste(id: string) {
        this.store.dispatch(KatAction.deleteCheckliste({ id }))
    }

    // betriebsstoffe
    loadBetriebsstoffe() {
        this.store.dispatch(KatAction.loadBetriebsstoffe())
    }
    insertBetriebsstoffe(insert: Kat) {
        this.store.dispatch(KatAction.insertBetriebsstoffe({ insert }))
    }
    updateBetriebsstoffe(update: Kat) {
        this.store.dispatch(KatAction.updateBetriebsstoffe({ update }))
    }
    deleteBetriebsstoffe(id: string) {
        this.store.dispatch(KatAction.deleteBetriebsstoffe({ id }))
    }

    // dienststellen
    loadDienststellen() {
        this.store.dispatch(KatAction.loadDienststellen())
    }
    insertDienststellen(insert: Kat) {
        this.store.dispatch(KatAction.insertDienststellen({ insert }))
    }
    updateDienststellen(update: Kat) {
        this.store.dispatch(KatAction.updateDienststellen({ update }))
    }
    deleteDienststellen(id: string) {
        this.store.dispatch(KatAction.deleteDienststellen({ id }))
    }

    // funktionen
    loadFunktionen() {
        this.store.dispatch(KatAction.loadFunktionen())
    }
    insertFunktionen(insert: Kat) {
        this.store.dispatch(KatAction.insertFunktionen({ insert }))
    }
    updateFunktionen(update: Kat) {
        this.store.dispatch(KatAction.updateFunktionen({ update }))
    }
    deleteFunktionen(id: string) {
        this.store.dispatch(KatAction.deleteFunktionen({ id }))
    }

    // kennungen
    loadKennungen() {
        this.store.dispatch(KatAction.loadKennungen())
    }
    insertKennung(insert: Kat) {
        this.store.dispatch(KatAction.insertKennung({ insert }))
    }
    updateKennung(update: Kat) {
        this.store.dispatch(KatAction.updateKennung({ update }))
    }
    deleteKennung(id: string) {
        this.store.dispatch(KatAction.deleteKennung({ id }))
    }

    // pruefvermerkkategorien
    loadPruefvermerkkategorien() {
        this.store.dispatch(KatAction.loadPruefvermerkkategorien())
    }
    insertPruefvermerkkategorie(insert: Kat) {
        this.store.dispatch(KatAction.insertPruefvermerkkategorie({ insert }))
    }
    updatePruefvermerkkategorie(update: Kat) {
        this.store.dispatch(KatAction.updatePruefvermerkkategorie({ update }))
    }
    deletePruefvermerkkategorie(id: string) {
        this.store.dispatch(KatAction.deletePruefvermerkkategorie({ id }))
    }

    // zaehlerstandstypen
    loadZaehlerstandstypen() {
        this.store.dispatch(KatAction.loadZaehlerstandstypen())
    }
    insertZaehlerstandstyp(insert: Kat) {
        this.store.dispatch(KatAction.insertZaehlerstandstyp({ insert }))
    }
    updateZaehlerstandstyp(update: Kat) {
        this.store.dispatch(KatAction.updateZaehlerstandstyp({ update }))
    }
    deleteZaehlerstandstyp(id: string) {
        this.store.dispatch(KatAction.deleteZaehlerstandstyp({ id }))
    }

    // zweck
    loadZweck() {
        this.store.dispatch(KatAction.loadZweck())
    }
    insertZweck(insert: Kat) {
        this.store.dispatch(KatAction.insertZweck({ insert }))
    }
    updateZweck(update: Kat) {
        this.store.dispatch(KatAction.updateZweck({ update }))
    }
    deleteZweck(id: string) {
        this.store.dispatch(KatAction.deleteZweck({ id }))
    }
}

export { KatState }