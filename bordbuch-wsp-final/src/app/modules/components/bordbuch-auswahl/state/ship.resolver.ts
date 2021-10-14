import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { AppState } from "src/app/state/app.state";
import { loadAllShip } from "./ship.actions";

@Injectable()
export class ShipResolver implements Resolve<any> {
    // loading-flag to dispatch only once
    loading = false

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this.store.dispatch(loadAllShip())
                }
            }),
            first(),
            // after finalize set loading-flag false again
            finalize(() => this.loading = false)
        )
    }

}