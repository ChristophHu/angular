import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { SpecFacade } from "../spec-store/spec.facade"


@Injectable()
export class SpecResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            // select(isShipLoaded),
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this._specFacade.loadShip(route.params[route.data.param])
                    this._specFacade.loadPatrol(route.params[route.data.param])
                    this._specFacade.loadReparaturen(route.params[route.data.param])
                    this._specFacade.loadBetankungen(route.params[route.data.param])
                    this._specFacade.loadTank(route.params[route.data.param])
                    this._specFacade.loadPeilung(route.params[route.data.param])
                    this._specFacade.loadChecklist(route.params[route.data.param])
                    this._specFacade.loadAllZaehlerstaende(route.params[route.data.param])
                    this._specFacade.loadPositionsByIdSchiff(route.params[route.data.param])
                    this._specFacade.loadKlarmeldungByIdSchiff(route.params[route.data.param])
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