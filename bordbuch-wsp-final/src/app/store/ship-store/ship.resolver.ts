import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { ShipAction } from "."
import { LastPositionActions } from "../lastposition-store"
import { PositionActions } from "../positionreport-store"
import { SpecFacade } from "../spec-store/spec.facade"
import { loadAllZaehlerstaende } from "../spec-store/store/actions"

@Injectable()
export class ShipResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            // select(isShipLoaded),
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this.store.dispatch(ShipAction.loadShip({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadPatrol({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadReparaturen({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadBetankungen({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadTank({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadPeilung({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(ShipAction.loadChecklist({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(PositionActions.loadAllData({ id_ship: route.params[route.data.param] }))
                    this.store.dispatch(loadAllZaehlerstaende({ id: route.params[route.data.param]}))
                    this.store.dispatch(LastPositionActions.loadData())

                    this._specFacade.loadUnklarByIdSchiff(route.params[route.data.param])
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