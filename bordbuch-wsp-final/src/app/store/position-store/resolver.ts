import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { filter, finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { PositionAction } from "."
import { isPositionsLoaded } from "./selectors"

@Injectable()
export class Resolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(isPositionsLoaded),
            tap((isPositionsLoaded) => {
                if (!this.loading && !isPositionsLoaded) {
                    this.loading = true
                    this.store.dispatch(PositionAction.loadPositions({ id_ship: route.params[route.data.param] }))
                }
            }),
            filter(isPositionsLoaded => isPositionsLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}