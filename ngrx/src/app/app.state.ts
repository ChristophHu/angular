import { routerReducer, RouterReducerState } from "@ngrx/router-store"
import { ActionReducerMap } from "@ngrx/store"
import { AuthState } from "./auth/model/authstate.model"

export interface AppState {
    auth: AuthState
}

export interface State {
    router: RouterReducerState<any>
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
}