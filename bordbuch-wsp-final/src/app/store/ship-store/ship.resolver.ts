import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { filter, finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { loadShip } from "./ship.actions"
import { isDataLoaded } from "./ship.selectors"

@Injectable()
export class ShipResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(isDataLoaded),
            tap(isDataLoaded => {
                if (!this.loading && !isDataLoaded) {
                    this.loading = true
                    this.store.dispatch(loadShip())
                }
            }),
            filter(dataLoaded => dataLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}