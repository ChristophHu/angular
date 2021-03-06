import { routerReducer, RouterReducerState } from "@ngrx/router-store"
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store"
import { environment } from "src/environments/environment"
import { AuthState } from "../modules/auth/model/authstate.model"
import { KatState } from "./kat-store"
import { SpecState } from "./spec-store"

export interface RootStoreState {
    auth: AuthState
    spec: SpecState.State
    kat: KatState.State
}

export interface State {
    router: RouterReducerState<any>
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        // console.log(`state before: `, state)
        // console.log(`action:       `, action)

        return reducer(state, action)
    }
}
export const metaReducers: MetaReducer<State>[] = 
    !environment.production ? [logger] : []