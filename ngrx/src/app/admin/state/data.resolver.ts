import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { AppState } from "src/app/app.state";
import { DataActions } from "./data.actions-type";
import { isDataLoaded } from "./data.selectors";

@Injectable()
export class DataResolver implements Resolve<any> {
    // loading-flag to dispatch only once
    loading = false

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(isDataLoaded),
            tap(dataLoaded => {
                if (!this.loading && !dataLoaded) {
                    this.loading = true
                    this.store.dispatch(DataActions.loadAllData())
                }
            }),
            filter(dataLoaded => dataLoaded),
            first(),
            // after finalize set loading-flag false again
            finalize(() => this.loading = false)
        )
    }

}