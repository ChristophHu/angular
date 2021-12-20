import { createReducer, on } from '@ngrx/store'
import { AuthState } from '../model/authstate.model'
import { login, logout } from './actions'

export const initialAuthState: AuthState = {
    backendResponse: undefined
}

// export const reducers: ActionReducerMap<AuthState> = { }

export const authReducer = createReducer(
	initialAuthState,
    on(login, (state, action) => {
        return {
            backendResponse: action.backendResponse
        }
    }),
    on(logout, (state, action) => {
        return {
            backendResponse: undefined
        }
    })
)