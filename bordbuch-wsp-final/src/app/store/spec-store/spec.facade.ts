import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'
import * as SpecState from './store/reducers'
import { Observable } from "rxjs";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";
import { Klarmeldung } from "src/app/core/model/klarmeldung.model";
import { PositionReport } from "src/app/core/model/positionreport.model";


@Injectable()
export class SpecFacade {
    // public selectors
    klarmeldung$  = this.store.pipe(select(SpecSelectors.selectKlarmeldung)) as Observable<Klarmeldung>
    positions$      = this.store.pipe(select(SpecSelectors.selectPositions)) as Observable<PositionReport[]>
    saving$         = this.store.pipe(select(SpecSelectors.selectSaving)) as Observable<boolean>
    allZaehlerstaende$  = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    resetStore() {
        this.store.dispatch(SpecActions.resetStore())
    }

    // klarmeldung
    loadKlarmeldungByIdSchiff(id: string) {
        this.store.dispatch(SpecActions.loadKlarmeldungByIdSchiff({ id }))
    }
    insertKlarmeldung(insert: Klarmeldung) {
        this.store.dispatch(SpecActions.insertKlarmeldung({ insert }))
    }
    updateKlarmeldung(update: Klarmeldung) {
        this.store.dispatch(SpecActions.updateKlarmeldung({ update }))
    }

    // position
    loadPositionsByIdSchiff(id: string) {
        this.store.dispatch(SpecActions.loadPositions({ id }))
    }
    insertPosition(insert: PositionReport) {
        this.store.dispatch(SpecActions.insertPosition({ insert }))
    }
    updatePosition(update: PositionReport) {
        this.store.dispatch(SpecActions.updatePosition({ update }))
    }
    deletePosition(id: string) {
        this.store.dispatch(SpecActions.deletePosition({ id }))
    }
    getPositionenByIdPatrol(id_patrol: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectPositionsByPatrol(id_patrol)))
    }


    // saving
    updateSaving(update: boolean) {
        this.store.dispatch(SpecActions.updateSaving({ update }))
    }

    // ship
    getShip(): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectedShip))
    }

    // zaehlerstaende
    loadAllZaehlerstaende(id: string) {
        this.store.dispatch(SpecActions.loadAllZaehlerstaende({ id }))
    }
    updateZaehlerstand(update: Zaehlerstand) {
        this.store.dispatch(SpecActions.updateZaehlerstand({ update }))
    }
    getZaehlerstaendeById(id: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectZaehlerstaendeById(id)))
    }
}

// export { SpecState }