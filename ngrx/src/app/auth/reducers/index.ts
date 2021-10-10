import { User } from '../model/user.model'
import { AuthActions } from '../actions/index'
import { createReducer, on } from '@ngrx/store'

export interface AuthState {
  user: User
}
export const initialAuthState: AuthState = {
  user: { id: '', email: '', role: ''}
}

// export const reducers: ActionReducerMap<AuthState> = { }

export const authReducer = createReducer(
	initialAuthState,
    on(AuthActions.login, (state, action) => {
        return {
            user: action.user
        }
    }),
    on(AuthActions.logout, (state, action) => {
        return {
            user: { id: '', email: '', role: ''}
        }
    })
)