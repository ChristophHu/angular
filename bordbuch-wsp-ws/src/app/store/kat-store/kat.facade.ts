import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as KatAction from './store/actions'
import * as KatSelectors from './store/selectors'
import * as KatState from './store/reducers'
import { Observable } from "rxjs";

import { Kat } from "src/app/core/models/kat.model";
import { Pruefvermerk } from "src/app/core/models/pruefvermerk.model";
import { Zaehlerstandstyp } from "src/app/core/models/zaehlerstandstyp.model";
import { Dienststelle } from "src/app/core/models/dienststelle.model";
import { Schiff } from "src/app/core/models/schiff.model";
import { Status } from "src/app/core/models/reparatur-status.model";

@Injectable()
export class KatFacade {
    // public selectors
    betriebsstoffe$  = this.store.pipe(select(KatSelectors.selectAllBetriebsstoffe)) as Observable<Kat[]>
    checkliste$  = this.store.pipe(select(KatSelectors.selectAllCheckliste)) as Observable<Kat[]>
    dienststellen$  = this.store.pipe(select(KatSelectors.selectAllDienststellen)) as Observable<Dienststelle[]>
    funktionen$  = this.store.pipe(select(KatSelectors.selectAllFunktionen)) as Observable<Kat[]>
    kennungen$  = this.store.pipe(select(KatSelectors.selectAllKennungen)) as Observable<Kat[]>
    pruefvermerke$  = this.store.pipe(select(KatSelectors.selectAllPruefvermerke)) as Observable<Pruefvermerk[]>
    pruefvermerkkategorien$  = this.store.pipe(select(KatSelectors.selectAllPruefvermerkkategorien)) as Observable<Kat[]>
    schiffe$  = this.store.pipe(select(KatSelectors.selectAllSchiffe)) as Observable<Schiff[]>
    status$ = this.store.pipe(select(KatSelectors.selectAllStatus)) as Observable<Status[]>
    zaehlerstandstypen$  = this.store.pipe(select(KatSelectors.selectAllZaehlerstandstypen)) as Observable<Zaehlerstandstyp[]>
    zweck$      = this.store.pipe(select(KatSelectors.selectAllZwecke)) as Observable<Kat[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // checkliste
    loadCheckliste() {
        this.store.dispatch(KatAction.loadCheckliste())
    }
    insertChecklist(insert: Kat) {
        this.store.dispatch(KatAction.insertChecklist({ insert }))
    }
    updateChecklist(update: Kat) {
        this.store.dispatch(KatAction.updateChecklist({ update }))
    }
    deleteChecklist(id: string) {
        this.store.dispatch(KatAction.deleteChecklist({ id }))
    }

    // betriebsstoffe
    loadBetriebsstoffe() {
        this.store.dispatch(KatAction.loadBetriebsstoffe())
    }
    insertBetriebsstoffe(insert: Kat) {
        this.store.dispatch(KatAction.insertBetriebsstoff({ insert }))
    }
    updateBetriebsstoffe(update: Kat) {
        this.store.dispatch(KatAction.updateBetriebsstoff({ update }))
    }
    deleteBetriebsstoffe(id: string) {
        this.store.dispatch(KatAction.deleteBetriebsstoff({ id }))
    }

    // dienststellen
    loadDienststellen() {
        this.store.dispatch(KatAction.loadDienststellen())
    }
    insertDienststelle(insert: Dienststelle) {
        this.store.dispatch(KatAction.insertDienststelle({ insert }))
    }
    updateDienststelle(update: Dienststelle) {
        this.store.dispatch(KatAction.updateDienststelle({ update }))
    }
    deleteDienststelle(id: string) {
        this.store.dispatch(KatAction.deleteDienststelle({ id }))
    }
    getIdByDienststelle(bezeichnung: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByDienststelle(bezeichnung)))
    }

    // funktionen
    loadFunktionen() {
        this.store.dispatch(KatAction.loadFunktionen())
    }
    insertFunktion(insert: Kat) {
        this.store.dispatch(KatAction.insertFunktion({ insert }))
    }
    updateFunktion(update: Kat) {
        this.store.dispatch(KatAction.updateFunktion({ update }))
    }
    deleteFunktion(id: string) {
        this.store.dispatch(KatAction.deleteFunktion({ id }))
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

    // pruefvermerke
    loadPruefvermerke() {
        this.store.dispatch(KatAction.loadPruefvermerke())
    }
    insertPruefvermerk(insert: Pruefvermerk) {
        this.store.dispatch(KatAction.insertPruefvermerk({ insert }))
    }
    updatePruefvermerk(update: Pruefvermerk) {
        this.store.dispatch(KatAction.updatePruefvermerk({ update }))
    }
    deletePruefvermerk(id: string) {
        this.store.dispatch(KatAction.deletePruefvermerk({ id }))
    }
    getIdByKategorie(bezeichnung: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByKategorie(bezeichnung)))
    }
    getItemByKategorie(bezeichnung: string): Observable<any> {
        return this.store.pipe(select(KatSelectors.selectItemByKategorie(bezeichnung)))
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

    // schiffe
    loadSchiffe() {
        this.store.dispatch(KatAction.loadSchiffe())
    }
    insertSchiff(insert: Schiff) {
        this.store.dispatch(KatAction.insertSchiff({ insert }))
    }
    updateSchiff(update: Schiff) {
        this.store.dispatch(KatAction.updateSchiff({ update }))
    }
    deleteSchiff(id: string) {
        this.store.dispatch(KatAction.deleteSchiff({ id }))
    }
    getShipById(id: string): Observable<any> {
        return this.store.pipe(select(KatSelectors.selectShipById(id)))
    }
    getIdByShip(name: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByShip(name)))
    }
    getNameById(id: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectNameById(id)))
    }
    getDurchsichtByName(name: string): Observable<any> {
        return this.store.pipe(select(KatSelectors.getDurchsichtByName(name)))
    }

    // status
    loadAllStatus() {
        this.store.dispatch(KatAction.loadAllStatus())
    }
    insertStatus(insert: Status) {
        this.store.dispatch(KatAction.insertStatus({ insert }))
    }
    updateStatus(update: Status) {
        this.store.dispatch(KatAction.updateStatus({ update }))
    }
    deleteStatus(id: string) {
        this.store.dispatch(KatAction.deleteStatus({ id }))
    }
    getIdByStatus(bezeichnung: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByStatus(bezeichnung)))
    }

    // zaehlerstandstypen
    loadZaehlerstandstypen() {
        this.store.dispatch(KatAction.loadZaehlerstandstypen())
    }
    insertZaehlerstandstyp(insert: Zaehlerstandstyp) {
        this.store.dispatch(KatAction.insertZaehlerstandstyp({ insert }))
    }
    updateZaehlerstandstyp(update: Zaehlerstandstyp) {
        this.store.dispatch(KatAction.updateZaehlerstandstyp({ update }))
    }
    deleteZaehlerstandstyp(id: string) {
        this.store.dispatch(KatAction.deleteZaehlerstandstyp({ id }))
    }
    getIdByZaehlerstandstyp(zaehlerstandstyp: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByZaehlerstandstyp(zaehlerstandstyp)))
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