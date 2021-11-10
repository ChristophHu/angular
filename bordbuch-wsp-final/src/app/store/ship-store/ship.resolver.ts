import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { ShipAction } from "."
import { LastPositionActions } from "../lastposition-store"
import { PositionActions } from "../positionreport-store"

import { ZaehlerstandAction } from "../zaehlerstand-store"

@Injectable()
export class ShipResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            // select(isShipLoaded),
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    console.log(route.params[route.data.param])
                    this.store.dispatch(ShipAction.loadShip({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadPatrol({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadReparaturen({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadBetankungen({ id_ship: route.params[route.data.param] }))

                    // positions
                    this.store.dispatch(PositionActions.loadAllData({ id_ship: route.params[route.data.param] }))

                    // data
                    this.store.dispatch(ZaehlerstandAction.loadAllData({ id_ship: route.params[route.data.param] }))

                    // lastPositions
                    this.store.dispatch(LastPositionActions.loadData())
                }
            }),
            // filter(isShipLoaded => isShipLoaded),
            first(),
            finalize(() => {
                this.loading = false
            })
        )
    }
}