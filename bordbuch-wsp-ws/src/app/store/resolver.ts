import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { KatFacade } from "./kat-store/kat.facade"
import { SpecFacade } from "./spec-store/spec.facade"

@Injectable()
export class Resolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            // select(isShipLoaded),
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this._katFacade.loadBetriebsstoffe()
                    this._katFacade.loadCheckliste()
                    this._katFacade.loadDienststellen()
                    this._katFacade.loadFunktionen()
                    this._katFacade.loadKennungen()
                    this._katFacade.loadPruefvermerke()
                    this._katFacade.loadPruefvermerkkategorien()
                    this._katFacade.loadSchiffe()
                    this._katFacade.loadAllStatus()
                    this._katFacade.loadZaehlerstandstypen()
                    this._katFacade.loadZweck()
                    
                    this._specFacade.loadAllChecklists()
                    this._specFacade.loadAllBetankungen()
                    this._specFacade.loadAllZaehlerstaende()
                    this._specFacade.loadAllReparaturen()
                    this._specFacade.loadAllLastStandorte()
                    this._specFacade.loadAllStreifen()
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