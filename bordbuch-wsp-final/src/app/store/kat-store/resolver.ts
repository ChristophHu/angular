import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { filter, finalize, first, tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { loadAllShip, loadPruefvermerke, loadZaehlerstandstypen } from "./actions"
import { isKatLoaded } from "./selectors"

@Injectable()
export class Resolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(isKatLoaded),
            tap((isKatLoaded) => {
                if (!this.loading && !isKatLoaded) {
                    this.loading = true
                    console.log('resolver')
                    this.store.dispatch(loadAllShip())
                    // this.store.dispatch(loadPruefvermerke())
                    // this.store.dispatch(loadZaehlerstandstypen())
                }
            }),
            filter(isKatLoaded => isKatLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}