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

export const selectSub = createSelector(
    selectAuthState,
    (auth) => auth.backendResponse!.sub
)

export const selectToken = createSelector(
    selectAuthState,
    (auth) => auth.backendResponse!.token
)

export const selectBackendresponse = createSelector(
    selectAuthState,
    (auth) => auth.backendResponse
)