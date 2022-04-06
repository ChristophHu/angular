import { Injectable } from "@angular/core"
import { select, Store } from "@ngrx/store"
import { RootStoreState } from "../root-store.state";

import * as KatAction from './store/actions'
import * as KatSelectors from './store/selectors'
import * as KatState from './store/reducers'
import { Observable } from "rxjs"

import { Ship } from "src/app/core/model/ship.model"
import { Kat } from "src/app/core/model/kat.model"
import { Dienststelle } from "src/app/core/model/dienststelle.model";
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { Status } from "src/app/core/model/reparatur-status.model";
import { PositionReport } from "src/app/core/model/positionreport.model";


@Injectable()
export class KatFacade {
    // public selectors
    betriebsstoffe$     = this.store.pipe(select(KatSelectors.selectAllBetriebsstoffe)) as Observable<Kat[]>
    dienststellen$      = this.store.pipe(select(KatSelectors.selectDienststellen)) as Observable<Dienststelle[]>
    funktionen$         = this.store.pipe(select(KatSelectors.selectAllFunktionen)) as Observable<Kat[]>
    lastPositions$      = this.store.pipe(select(KatSelectors.selectLastPositions)) as Observable<PositionReport[]>
    kennungen$          = this.store.pipe(select(KatSelectors.selectAllKennungen)) as Observable<Kat[]>
    pruefvermerkskategorien$ = this.store.pipe(select(KatSelectors.selectpruefvermerkkategorien)) as Observable<Kat[]>
    pruefvermerke$      = this.store.pipe(select(KatSelectors.selectpruefvermerke)) as Observable<Pruefvermerk[]>
    schiffe$            = this.store.pipe(select(KatSelectors.selectShips)) as Observable<Ship[]>
    status$             = this.store.pipe(select(KatSelectors.selectAllStatus)) as Observable<Status[]>
    zweck$              = this.store.pipe(select(KatSelectors.selectAllZwecke)) as Observable<Kat[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // betriebsstoffe
    loadBetriebsstoffe() {
        this.store.dispatch(KatAction.loadBetriebsstoffe())
    }
    // dienststellen
    loadDienststellen() {
        this.store.dispatch(KatAction.loadDienststellen())
    }

    // funktionen
    loadFunktionen() {
        this.store.dispatch(KatAction.loadFunktionen())
    }

    // kennungen
    loadKennungen() {
        this.store.dispatch(KatAction.loadKennungen())
    }

    // lastpositions
    loadLastPositions() {
        this.store.dispatch(KatAction.loadLastPositions())
    }

    // pruefvermerke
    loadPruefvermerke() {
        this.store.dispatch(KatAction.loadPruefvermerke())
    }

    // pruefvermerkkategorien
    loadPruefvermerkkategorien() {
        this.store.dispatch(KatAction.loadPruefvermerkKategorien())
    }

    // ships
    loadAllShip() {
        this.store.dispatch(KatAction.loadAllShip())
    } 

    // status
    loadAllStatus() {
        this.store.dispatch(KatAction.loadAllStatus())
    }
    getIdByStatus(bezeichnung: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByStatus(bezeichnung)))
    }

    // zaehlerstandstypen
    loadZaehlerstandstypen() {
        this.store.dispatch(KatAction.loadZaehlerstandstypen())
    }
    getIdByZaehlerstandstyp(zaehlerstandstyp: string): Observable<string | undefined> {
        return this.store.pipe(select(KatSelectors.selectIdByZaehlerstandstyp(zaehlerstandstyp)))
    }

    // zweck
    loadZwecke() {
        this.store.dispatch(KatAction.loadZwecke())
    }
}

export { KatState }