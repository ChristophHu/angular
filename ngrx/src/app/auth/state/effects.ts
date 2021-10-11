import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
 
@Injectable()
export class AuthEffects {
    // login$ = createEffect(() =>
    //     this.actions$.pipe(
    //     ofType(LoginPageActions.login),
    //     exhaustMap(action =>
    //         this.authService.login(action.credentials).pipe(
    //         map(user => AuthApiActions.loginSuccess({ user })),
    //         catchError(error => of(AuthApiActions.loginFailure({ error })))
    //         )
    //     )
    //     )
    // );
 
    constructor(
        
    ) {}
}