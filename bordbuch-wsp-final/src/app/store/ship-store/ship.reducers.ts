import { createReducer, on } from "@ngrx/store"
import { loadPatrol, patrolLoaded, shipLoaded } from "./ship.actions"
import { State } from "./ship.state"
// export interface State {
//     ship: Ship | undefined
// }

export const initialDataState: State = {
    ship: undefined,
    isAllDataLoaded: false
}

export const shipReducer = createReducer(
    initialDataState,
    on(shipLoaded, (state, action) => {
        return {
            ship: action.ship, isAllDataLoaded: true
        }
    }),
    on(patrolLoaded, (state, action) => {
        return {
            ship: state.ship, patrol: action.patrol, isAllDataLoaded: true
        }
    })
)
