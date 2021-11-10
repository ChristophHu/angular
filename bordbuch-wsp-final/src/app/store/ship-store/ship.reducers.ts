import { createReducer, on } from "@ngrx/store"
import { Besatzung } from "src/app/core/model/besatzung.model"
import { Betankung } from "src/app/core/model/betankung"
import { Patrol } from "src/app/core/model/patrol.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { ShipAction } from "."
import { State } from "./ship.state"


export const initialDataState: State = {
    ship: undefined,
    // patrol: { id_ship: '', purpose: '', status: 'In Vorbereitung', crew: [], start: '', end: '', identifier: ''},
    isAllDataLoaded: false
}

export const shipReducer = createReducer(
    initialDataState,
    on(ShipAction.shipLoaded, (state, action) => {
        return {
            ship: action.ship, patrol: state.patrol, zaehlerstaende: state.zaehlerstaende, reparaturen: state.reparaturen, betankungen: state.betankungen, isAllDataLoaded: false
        }
    }),
    on(ShipAction.patrolLoaded, (state, action) => {
        return {
            ship: state.ship, patrol: action.patrol, zaehlerstaende: state.zaehlerstaende, reparaturen: state.reparaturen, betankungen: state.betankungen, isAllDataLoaded: false
        }
    }),
    on(ShipAction.insertPatrolSuccess, (state, action) => {
        let patrol: Patrol = Object.assign({}, action.action.insert, { id: action.id })
        // let clearedPatrol: Patrol | undefined = patrol
        // clearedPatrol = [...clearedPatrol!, ...[patrol]]
        return {
            ...state,
            patrol: patrol
        }
    }),
    on(ShipAction.updatePatrol, (state, action) => {
        let patrol: Patrol = action.update
        return {
            ...state,
            patrol: patrol
        }
    }),
    on(ShipAction.deletePatrol, (state, action) => {
        return {
            ...state,
            patrol: undefined
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
    }),

    // besatzung
    on(ShipAction.insertPatrolBesatzungSuccess, (state, action) => {
        let besatzung: Besatzung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBesatzung: Besatzung[] | undefined = state.patrol?.besatzung
        console.log(clearedBesatzung)
        clearedBesatzung = [...clearedBesatzung!, ...[besatzung]]
        return {
            ...state,
            patrol: Object.assign({}, state.patrol, { besatzung: clearedBesatzung })
        }
    }),
    on(ShipAction.updatePatrolBesatzung, (state, action) => {
        let clearedBesatzung: Besatzung[] = state.patrol?.besatzung.filter(el => el.id != action.update.changes.id)!
        clearedBesatzung.push(action.update.changes as Besatzung)
        return {
            ...state,
            patrol: Object.assign({}, state.patrol, { besatzung: clearedBesatzung })
        }
    }),
    on(ShipAction.deletePatrolBesatzung, (state, action) => {
        const newState = state.patrol?.besatzung.filter(el => el.id !== action.id)
        return {
            ...state,
            patrol: Object.assign({}, state.patrol, { besatzung: newState })
        }
    }),

    // betankung
    on(ShipAction.insertBetankungSuccess, (state, action) => {
        let betankung: Betankung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBetankung: Betankung[] | undefined = state.betankungen
        clearedBetankung = [...clearedBetankung!, ...[betankung]]
        return {
            ...state,
            betankungen: clearedBetankung
        }
    }),

    // pruefvermerk
    on(ShipAction.insertReparaturSuccess, (state, action) => {
        let pruefvermerk: Reparatur = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPruefvermerk: Reparatur[] | undefined = state.reparaturen
        clearedPruefvermerk = [...clearedPruefvermerk!, ...[pruefvermerk]]
        return {
            ...state,
            reparaturen: clearedPruefvermerk
        }
    }),
    on(ShipAction.resetStore, (state, action)  => {
        // return {
        //     ship: undefined,
        //     isAllDataLoaded: false
        // }
        return Object.assign({}, initialDataState)
    })
)
