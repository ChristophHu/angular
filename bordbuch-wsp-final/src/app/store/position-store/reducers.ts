import { createReducer, on } from "@ngrx/store"
import { PositionAction } from "."
import { adapter } from "./adapter"
import { State } from "./state"

export const initialState: State = {
    positions: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialState,
    // on(PositionAction.loadedPositions, (state, action) => {
    //     return {
    //         positions: action.positions, isAllDataLoaded: true
    //     }
    // })

)
