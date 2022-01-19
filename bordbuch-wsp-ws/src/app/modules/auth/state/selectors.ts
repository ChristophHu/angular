import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Features } from 'src/app/core/models/feature'
import { AuthState } from '../model/authstate.model'

export const selectAuthState = createFeatureSelector<AuthState>(Features.Auth)

export const isLoggedIn = createSelector(
    selectAuthState,
    (auth) => {
        if(!!auth.backendResponse) {
            console.log('backendResponse: true')
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
            console.log(`backendresponse: ${backendResponse.token}`)
            return backendResponse.token
        } else {
            console.log('no backendresponse')
            return ''
        }
    }
)

export const selectBackendUrl = createSelector(
    selectBackendresponse,
    backendResponse => {
        if(!!backendResponse) {
            console.log(`backendresponse: ${backendResponse.backendUrl}`)
            return backendResponse.backendUrl
        } else {
            console.log('no backendresponse')
            return ''
        }
    }
)



export const selectRole = createSelector(
    selectBackendresponse,
    response => response?.role
)
