import { createReducer, on } from "@ngrx/store"
import { pruefvermerkeLoaded } from "./actions"
import { State } from "./state"

export const initialDataState: State = {
    pruefvermerke: undefined,
    isAllDataLoaded: false
}

export const shipReducer = createReducer(
    initialDataState,
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            pruefvermerke: action.pruefvermerke, isAllDataLoaded: true
        }
    }),
    // on(patrolLoaded, (state, action) => {
    //     return {
    //         ship: state.ship, patrol: action.patrol, isAllDataLoaded: true
    //     }
    // })
)
