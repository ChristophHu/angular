import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'
import * as SpecState from './store/reducers'
import { Observable } from "rxjs";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";
import { Unklar } from "src/app/core/model/unklar.model";


@Injectable()
export class SpecFacade {
    // public selectors
    unklar$  = this.store.pipe(select(SpecSelectors.selectUnklar)) as Observable<Unklar>
    allZaehlerstaende$  = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // unklar
    loadUnklarByIdSchiff(id: string) {
        this.store.dispatch(SpecActions.loadUnklarByIdSchiff({ id }))
    }
    insertUnklar(insert: Unklar) {
        this.store.dispatch(SpecActions.insertUnklar({ insert }))
    }
    updateUnklar(update: Unklar) {
        this.store.dispatch(SpecActions.updateUnklar({ update }))
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