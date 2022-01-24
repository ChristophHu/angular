import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Features } from 'src/app/core/model/feature'
import { AuthState } from '../model/authstate.model'

export const selectAuthState = createFeatureSelector<AuthState>(Features.Auth)

export const isLoggedIn = createSelector(
    selectAuthState,
    (auth) => {
        if(!!auth.backendResponse) {
            return true
        } else {
            return false
        }
    }
)
export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
)

export const selectSub = createSelector(
    selectAuthState,
    (auth) => auth.backendResponse!.sub
)

export const selectBackendresponse = createSelector(
    selectAuthState,
    auth => auth.backendResponse
)

export const selectToken = createSelector(
    selectBackendresponse,
    backendResponse => {
        if(!!backendResponse) {
            return backendResponse.token
        } else {
            return ''
        }
    }
)

export const selectBackendUrl = createSelector(
    selectBackendresponse,
    backendResponse => {
        if(!!backendResponse) {
            return backendResponse.backendUrl
        } else {
            return ''
        }
    }
)