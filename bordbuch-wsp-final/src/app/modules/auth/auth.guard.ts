import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { RootStoreState } from "src/app/store/root-store.state"
import { isLoggedIn, selectAuthState } from "./state/selectors"

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<RootStoreState>, private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    // console.log('AuthGuard-canActivate: false')
                    this._router.navigateByUrl('/login')
                } else {
                    // console.log(`AuthGuard-canActivate: true - ${loggedIn}`)
                    // this._router.navigateByUrl('/mobile')
                }
            })
        )
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                console.log(loggedIn)
                if (!loggedIn) {
                    // console.log('AuthGuard-canActivateChild: false')
                    this._router.navigateByUrl('/login')
                } else {
                    // console.log('AuthGuard-canActivateChild: true')
                }
            })
        )
    }
}