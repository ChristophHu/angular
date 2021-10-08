import { ActionReducer, ActionReducerMap, createFeatureSelector, createReducer, createSelector, MetaReducer, on } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthActions } from '../action-types';
import { User } from '../models/user';


export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: { email: '', password: '' }
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state: any, action: any) => {
    return {
      user: action.user
    }
  })
)
