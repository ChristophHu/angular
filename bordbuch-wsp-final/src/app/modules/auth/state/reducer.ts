import { createReducer, on } from '@ngrx/store'
import { AuthState } from '../model/authstate.model'
import { login, logout } from './actions'

export const initialAuthState: AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = { }

export const authReducer = createReducer(
	initialAuthState,
    on(login, (state, action) => {
        return {
            user: action.user
        }
    }),
    on(logout, (state, action) => {
        return {
            user: undefined
        }
    })
)