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

    constructor(private store: Store<RootStoreState>, private katFacade: KatFacade) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            // select(isShipLoaded),
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this.katFacade.loadBetriebsstoffe()
                    this.katFacade.loadCheckliste()
                    this.katFacade.loadDienststellen()
                    this.katFacade.loadFunktionen()
                    this.katFacade.loadKennungen()
                    this.katFacade.loadPruefvermerke()
                    this.katFacade.loadPruefvermerkkategorien()
                    this.katFacade.loadSchiffe()
                    this.katFacade.loadZaehlerstandstypen()
                    this.katFacade.loadZweck()
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