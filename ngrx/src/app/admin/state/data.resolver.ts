import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { AppState } from "src/app/app.state";
import { DataActions } from "./data.actions-type";

@Injectable()
export class DataResolver implements Resolve<any> {
    // loading-flag to dispatch only once
    loading = false

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this.store.dispatch(DataActions.loadAllData())
                }
            }),
            first(),
            // after finalize set loading-flag false again
            finalize(() => this.loading = false)
        )
    }

}