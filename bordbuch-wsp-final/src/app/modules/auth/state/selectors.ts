import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from '../model/authstate.model'

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const isLoggedIn = createSelector(
    selectAuthState,
    // (state: AppState) => state.auth,
    (auth) => !!auth.backendResponse
)
export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
)