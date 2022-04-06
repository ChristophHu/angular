import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'
import * as SpecState from './store/reducers'
import { Observable } from "rxjs";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";
import { Klarmeldung } from "src/app/core/model/klarmeldung.model";


@Injectable()
export class SpecFacade {
    // public selectors
    klarmeldung$  = this.store.pipe(select(SpecSelectors.selectKlarmeldung)) as Observable<Klarmeldung>
    allZaehlerstaende$  = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // Klarmeldung
    loadKlarmeldungByIdSchiff(id: string) {
        this.store.dispatch(SpecActions.loadKlarmeldungByIdSchiff({ id }))
    }
    insertKlarmeldung(insert: Klarmeldung) {
        this.store.dispatch(SpecActions.insertKlarmeldung({ insert }))
    }
    updateKlarmeldung(update: Klarmeldung) {
        this.store.dispatch(SpecActions.updateKlarmeldung({ update }))
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

export { SpecState }