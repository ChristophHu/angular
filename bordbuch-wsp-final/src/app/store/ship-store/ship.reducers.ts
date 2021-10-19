import { createReducer, on } from "@ngrx/store"
import { ShipAction } from "."
import { loadPatrol, patrolLoaded, shipLoaded, zaehlerstaendeLoaded } from "./ship.actions"
import { State } from "./ship.state"
// export interface State {
//     ship: Ship | undefined
// }

export const initialDataState: State = {
    ship: undefined,
    // patrol: { id_ship: '', purpose: '', status: 'In Vorbereitung', crew: [], start: '', end: '', identifier: ''},
    isAllDataLoaded: false
}

export const shipReducer = createReducer(
    initialDataState,
    on(ShipAction.shipLoaded, (state, action) => {
        return {
            ship: action.ship, isAllDataLoaded: false
        }
    }),
    on(ShipAction.patrolLoaded, (state, action) => {
        return {
            ship: state.ship, patrol: action.patrol, zaehlerstaende: state.zaehlerstaende, reparaturen: state.reparaturen, betankungen: state.betankungen, isAllDataLoaded: false
        }
    }),
    on(ShipAction.zaehlerstaendeLoaded, (state, action) => {
        return {
            ship: state.ship, patrol: state.patrol, zaehlerstaende: action.zaehlerstaende, reparaturen: state.reparaturen, betankungen: state.betankungen, isAllDataLoaded: false
        }
    }),
    on(ShipAction.reparaturenLoaded, (state, action) => {
        return {
            ship: state.ship, patrol: state.patrol, zaehlerstaende: state.zaehlerstaende, reparaturen: action.reparaturen, betankungen: state.betankungen, isAllDataLoaded: false
        }
    }),
    on(ShipAction.betankungenLoaded, (state, action) => {
        return {
            ship: state.ship, patrol: state.patrol, zaehlerstaende: state.zaehlerstaende, reparaturen: state.reparaturen, betankungen: action.betankungen, isAllDataLoaded: false
        }
    })
)
