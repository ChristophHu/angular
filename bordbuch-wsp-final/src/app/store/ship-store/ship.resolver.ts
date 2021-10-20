import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { filter, finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { ShipAction } from "."
import { loadAllData } from "../data-store/actions"
import { KatAction } from "../kat-store"
import { PositionAction } from "../position-store"

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
                    this.store.dispatch(ShipAction.loadShip({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadPatrol({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadZaehlerstaende({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadReparaturen({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadBetankungen({ id_ship: route.params[route.data.param] }))

                    // kat
                    this.store.dispatch(KatAction.loadPruefvermerke())
                    this.store.dispatch(KatAction.loadZaehlerstandstypen())

                    // positions
                    this.store.dispatch(PositionAction.loadPositions({ id_ship: route.params[route.data.param] }))

                    // data
                    this.store.dispatch(loadAllData())

                }
            }),
            // filter(isShipLoaded => isShipLoaded),
            first(),
            finalize(() => {
                this.loading = false
                console.log('fertig')
            })
        )
    }
}