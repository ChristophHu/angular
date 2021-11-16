import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { PositionActions } from ".";
import { RootStoreState } from "../root-store.state";

@Injectable()
export class DataResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<RootStoreState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this.store.dispatch(PositionActions.loadAllData({ id_ship: route.params[route.data.param] }))
                }
            }),
            first(),
            finalize(() => this.loading = false)
        )
    }

}