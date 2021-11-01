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
                    this.store.dispatch(loadAllShip())

                    // kat
                    this.store.dispatch(KatAction.loadAllShip())
                    this.store.dispatch(KatAction.loadPruefvermerke())
                    this.store.dispatch(KatAction.loadZaehlerstandstypen())
                    this.store.dispatch(KatAction.loadDienststellen())
                }
            }),
            filter(dataLoaded => dataLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}