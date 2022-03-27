import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'
import * as SpecState from './store/reducers'
import { Observable } from "rxjs";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";


@Injectable()
export class SpecFacade {
    // public selectors
    // allReparaturFotos$  = this.store.pipe(select(SpecSelectors.selectAllReparaturFotos)) as Observable<any[]>
    // allReparaturFotoCount$ = this.store.pipe(select(SpecSelectors.selectReparaturFotosCount)) as Observable<number>
    allZaehlerstaende$  = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

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

    // zaehlerstaende
    loadAllZaehlerstaende(id: string) {
        this.store.dispatch(SpecActions.loadAllZaehlerstaende({ id }))
    }
    // insertZaehlerstand(insert: Zaehlerstand) {
    //     this.store.dispatch(SpecActions.insertZaehlerstand({ insert }))
    // }
    updateZaehlerstand(update: Zaehlerstand) {
        this.store.dispatch(SpecActions.updateZaehlerstand({ update }))
    }
    // deleteZaehlerstand(id: string) {
    //     this.store.dispatch(SpecActions.deleteZaehlerstand({ id }))
    // }
    getZaehlerstaendeById(id: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectZaehlerstaendeById(id)))
    }
    // getDurchsichtByNameZaehlerstandstyp(name: string, zaehlerstandstyp: string): Observable<any> {
    //     return this.store.pipe(select(SpecSelectors.selectDurchsichtByNameZaehlerstandstyp(name, zaehlerstandstyp)))
    // }
    
}

export { SpecState }