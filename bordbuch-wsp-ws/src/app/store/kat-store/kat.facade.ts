import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as KatAction from './store/actions'
import * as KatSelectors from './store/selectors'
import * as KatState from './store/reducers'
import { Observable } from "rxjs";
import { Kennung } from "src/app/core/models/kennung.model";

@Injectable()
export class KatFacade {
    // public selectors
    kennungen$ = this.store.pipe(select(KatSelectors.selectAllKennungen)) as Observable<Kennung[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    loadKennungen() {
        this.store.dispatch(KatAction.loadKennungen())
    }
    insertKennung(insert: Kennung) {
        this.store.dispatch(KatAction.insertKennung({ insert }))
    }
    updateKennung(update: Kennung) {
        this.store.dispatch(KatAction.updateKennung({ update }))
    }
    deleteKennung(id: string) {
        this.store.dispatch(KatAction.deleteKennung({ id }))
    }
}

export { KatState }