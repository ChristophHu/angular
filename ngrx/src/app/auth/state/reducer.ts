import { AuthActions } from './index'
import { createReducer, on } from '@ngrx/store'
import { AuthState } from '../model/authstate.model'

export const initialAuthState: AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = { }

export const authReducer = createReducer(
	initialAuthState,
    on(AuthActions.login, (state, action) => {
        console.log(state)
        return {
            user: action.user
        }
    }),
    on(AuthActions.logout, (state, action) => {
        return {
            user: undefined
        }
    })
)