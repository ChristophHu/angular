import { state } from "@angular/animations"
import { createReducer, on, Store } from "@ngrx/store"
import { Besatzung } from "src/app/core/model/besatzung.model"
import { Betankung } from "src/app/core/model/betankung"
import { Checklist } from "src/app/core/model/checklist.model"
import { Checklistitem } from "src/app/core/model/checklistitem.model"
import { Einsatzmittel } from "src/app/core/model/einsatzmittel.model"
import { Geraetebuch } from "src/app/core/model/geraetebuch.model"
import { Patrol } from "src/app/core/model/patrol.model"
import { Peilung } from "src/app/core/model/peilung.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { checkStateForEmptyArrays } from "src/app/shared/utils"

import { ShipAction } from "."
import { State } from "./ship.state"


export const initialDataState: State = {
    ship: undefined,
    patrol: undefined,
    // patrol: { id_ship: '', purpose: '', status: 'In Vorbereitung', crew: [], start: '', end: '', identifier: ''},
    isAllDataLoaded: false
}

export const shipReducer = createReducer(
    initialDataState,
    on(ShipAction.shipLoaded, (state, action) => {
        return {
            ...state,
            ship: action.ship
        }
    }),
    on(ShipAction.updateShipSuccess, (state, action) => {
        return {
            ...state,
            ship: action.update
        }
    }),
    on(ShipAction.patrolLoaded, (state, action) => {
        return {
            ...state,
            patrol: action.patrol
        }
    }),
    on(ShipAction.initializePatrol, (state, action) => {
        let patrol: Patrol = Object.assign({}, action.initialize)
        return {
            ...state,
            patrol: patrol
        }
    }),
    on(ShipAction.insertPatrolSuccess, (state, action) => {
        let patrol: Patrol = Object.assign({}, action.action.insert, { id: action.id })
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
    on(ShipAction.deletePatrolSuccess, (state, action) => {
        return {
            ...state,
            patrol: undefined
        }
    }),
    
    on(ShipAction.reparaturenLoaded, (state, action) => {
        return {
            ...state,
            reparaturen: action.reparaturen
        }
    }),
    on(ShipAction.betankungenLoaded, (state, action) => {
        return {
            ...state,
            betankungen: action.betankungen
        }
    }),
    on(ShipAction.loadedTank, (state, action) => {
        return {
            ...state,
            tanks: action.tanks
        }
    }),

    // besatzung
    on(ShipAction.insertPatrolBesatzungSuccess, (state, action) => {
        let besatzung: Besatzung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBesatzung: Besatzung[] | undefined = checkStateForEmptyArrays(state.patrol?.besatzung)
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
        let clearedBetankung: Betankung[] | undefined = checkStateForEmptyArrays(state.betankungen)
        clearedBetankung = [...clearedBetankung!, ...[betankung]]
        return {
            ...state,
            betankungen: clearedBetankung
        }
    }),

    // pruefvermerk
    on(ShipAction.insertReparaturSuccess, (state, action) => {
        let pruefvermerk: Reparatur = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPruefvermerk: Reparatur[] | undefined = checkStateForEmptyArrays(state.reparaturen)
        clearedPruefvermerk = [...clearedPruefvermerk!, ...[pruefvermerk]]
        return {
            ...state,
            reparaturen: clearedPruefvermerk
        }
    }),
    on(ShipAction.updateReparaturSuccess, (state, action) => {
        let cleared: Reparatur[] = state.reparaturen?.filter(el => el.id != action.update.id)!
        let pruefvermerk: Reparatur = Object.assign({}, action.update)
        cleared = [...cleared!, ...[pruefvermerk]]
        return {
            ...state,
            reparaturen: cleared
        }
    }),
    //peilungen
    on(ShipAction.loadedPeilung, (state, action) => {
        return {
            ...state,
            peilungen: action.peilungen
        }
    }),
    on(ShipAction.insertPeilungSuccess, (state, action) => {
        let peilung: Peilung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPeilung: Peilung[] | undefined = checkStateForEmptyArrays(state.peilungen)
        clearedPeilung = clearedPeilung?.filter(el => el.bezeichnung != action.action.insert.bezeichnung)
        clearedPeilung = [...clearedPeilung!, ...[peilung]]
        return {
            ...state,
            peilungen: clearedPeilung
        }
    }),
    on(ShipAction.updatePeilung, (state, action) => {
        let clearedPeilungen = [...state.peilungen!]
        clearedPeilungen = clearedPeilungen.filter(el => el.id != action.peilung.id)
        clearedPeilungen.push(action.peilung)
        // ggf. siehe ipdateChecklist

        return {
            ...state,
            peilungen: clearedPeilungen
        }
    }),
    // checklist
    on(ShipAction.loadedChecklist, (state, action) => {
        return {
            ...state,
            checklist: action.checklist
        }
    }),
    on(ShipAction.updateChecklist, (state, action) => {
        let checklist: Checklist = Object.assign({}, action.update)

        // let cleared: Checklist | undefined = state.checklist
        // if (cleared) {
        //     cleared.checklistItems = cleared.checklistItems?.filter(el => el.id != action.updateItem.id)
        //     cleared.checklistItems = [...cleared.checklistItems!, ...[checklist]]
        // }
        return {
            ...state,
            checklist: checklist
        }
    }),

    on(ShipAction.resetStore, (state, action)  => {
        // return {
        //     ship: undefined,
        //     isAllDataLoaded: false
        // }
        return Object.assign({}, initialDataState)
    }),

    // reparaturfotos
    on(ShipAction.downloadReparaturFotosSuccess, (state, action) => {
        return {
            ...state,
            reparaturfotos: action.fotos
        }
    }),
    on(ShipAction.uploadReparaturFotoSuccess, (state, action) => {
        let reparaturfoto: any = Object.assign({}, action.action.upload, { id: action.id })
        let cleared: any[] | undefined = checkStateForEmptyArrays(state.reparaturfotos)
        cleared = cleared?.filter(el => el.id != action.action.upload.id)
        cleared = (cleared) ? [...cleared!, ...[reparaturfoto]] : [reparaturfoto]
        return {
            ...state,
            reparaturfotos: cleared
        }
    }),
    on(ShipAction.deleteReparaturFotoSuccess, (state, action) => {
        let cleared: any[] | undefined = checkStateForEmptyArrays(state.reparaturfotos)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            reparaturfotos: cleared
        }
    })
)
