import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from '.';
 
@Injectable()
export class AuthEffects {
 
    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthActions.login),
            tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
        )
    , { dispatch: false }) // dispatch = false to prevent circular dependencies

    logout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(action => {
                localStorage.removeItem('user')
                this.router.navigateByUrl('/')
            })
        )
    , { dispatch: false })

    constructor(private actions$: Actions, private router: Router) {

    }
}