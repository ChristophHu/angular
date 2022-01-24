import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { filter, finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { KatAction } from "../kat-store"
import { loadAllShip } from "./ship-selection.actions"
import { isDataLoaded } from "./ship-selection.selectors"

@Injectable()
export class ShipSelectionResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(isDataLoaded),
            tap(isDataLoaded => {
                if (!this.loading && !isDataLoaded) {
                    this.loading = true
                    
                    // kat
                    setTimeout(() => {
                        this.store.dispatch(KatAction.loadAllShip())
                        this.store.dispatch(KatAction.loadPruefvermerke())
                        this.store.dispatch(KatAction.loadPruefvermerkKategorien())
                        this.store.dispatch(KatAction.loadZaehlerstandstypen())
                        this.store.dispatch(KatAction.loadDienststellen())
                        this.store.dispatch(KatAction.loadBetriebsstoffe())
                        this.store.dispatch(KatAction.loadFunktionen())
                        this.store.dispatch(KatAction.loadKennungen())
                        this.store.dispatch(KatAction.loadZwecke())
                    }, 1000)
                }
            }),
            filter(dataLoaded => dataLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}