import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { isLoggedIn } from "./state/selectors"

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<RootStoreState>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/')
                }
            })
        )
    }
}