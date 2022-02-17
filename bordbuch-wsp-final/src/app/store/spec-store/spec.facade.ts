import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'
import * as SpecState from './store/reducers'
import { Observable } from "rxjs";


@Injectable()
export class SpecFacade {
    // public selectors
    // allReparaturFotos$  = this.store.pipe(select(SpecSelectors.selectAllReparaturFotos)) as Observable<any[]>
    // allReparaturFotoCount$ = this.store.pipe(select(SpecSelectors.selectReparaturFotosCount)) as Observable<number>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    // reparaturen
    // loadAllReparaturen() {
    //     this.store.dispatch(SpecActions.loadAllReparaturen())
    // }
    // insertReparatur(insert: Reparatur) {
    //     this.store.dispatch(SpecActions.insertReparatur({ insert }))
    // }
    // updateReparatur(update: Reparatur) {
    //     this.store.dispatch(SpecActions.updateReparatur({ update }))
    // }
    // deleteReparatur(id: string,) {
    //     this.store.dispatch(SpecActions.deleteReparatur({ id }))
    // }
    // getReparaturen(status: string): Observable<Reparatur[] | undefined> {
    //     return this.store.pipe(select(SpecSelectors.selectReparaturen(status)))
    // }
    // downloadReparaturFotos( id: string ) {
    //     this.store.dispatch(SpecActions.downloadReparaturFotos({ id }))
    // }
    // uploadReparaturFoto( upload: any ) {
    //     this.store.dispatch(SpecActions.uploadReparaturFoto({ upload }))
    // }
    // deleteReparaturFoto( id: string ) {
    //     this.store.dispatch(SpecActions.deleteReparaturFoto({ id }))
    // }
    
}

export { SpecState }