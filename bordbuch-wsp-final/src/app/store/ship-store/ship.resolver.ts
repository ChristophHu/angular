import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { filter, finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { loadPatrol, loadShip } from "./ship.actions"
import { isShipLoaded } from "./ship.selectors"

@Injectable()
export class ShipResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(isShipLoaded),
            tap((isShipLoaded) => {
                if (!this.loading && !isShipLoaded) {
                    this.loading = true
                    this.store.dispatch(loadShip({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(loadPatrol({ id_ship: route.params[route.data.param] }))
                }
            }),
            filter(isShipLoaded => isShipLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}