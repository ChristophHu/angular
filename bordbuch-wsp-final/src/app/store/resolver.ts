import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { KatFacade } from "./kat-store/kat.facade"

@Injectable()
export class Resolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>, private _katFacade: KatFacade) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            // select(isShipLoaded),
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this._katFacade.loadAllShip()
                    this._katFacade.loadDienststellen()

                    this._katFacade.loadFunktionen()
                    this._katFacade.loadKennungen()
                    this._katFacade.loadLastPositions()
                    this._katFacade.loadPruefvermerke()
                    this._katFacade.loadPruefvermerkkategorien()
                    this._katFacade.loadBetriebsstoffe()
                    this._katFacade.loadAllStatus()
                    this._katFacade.loadZaehlerstandstypen()
                    this._katFacade.loadZwecke()
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