import { routerReducer, RouterReducerState } from "@ngrx/router-store"
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store"
import { environment } from "src/environments/environment"
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

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log(`state before: `, state)
        console.log(`action:       `, action)

        return reducer(state, action)
    }
}
export const metaReducers: MetaReducer<State>[] = 
    !environment.production ? [logger] : []