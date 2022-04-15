import { createReducer, on } from "@ngrx/store"
import { Besatzung } from "src/app/core/model/besatzung.model"
import { Betankung } from "src/app/core/model/betankung"
import { Checklist } from "src/app/core/model/checklist.model"
import { Klarmeldung } from "src/app/core/model/klarmeldung.model"
import { Patrol } from "src/app/core/model/patrol.model"
import { Peilung } from "src/app/core/model/peilung.model"
import { PositionReport } from "src/app/core/model/positionreport.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { Ship } from "src/app/core/model/ship.model"
import { Tank } from "src/app/core/model/tank.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"
import { checkStateForEmptyArrays } from "src/app/shared/utils"
import { deletePatrolBesatzung, deletePatrolSuccess, deletePositionSuccess, deleteReparaturFotoSuccess, downloadReparaturFotosSuccess, initializePatrol, insertBetankungSuccess, insertKlarmeldungSuccess, insertPatrolBesatzungSuccess, insertPatrolSuccess, insertPeilungSuccess, insertPositionSuccess, insertReparaturSuccess, loadBetankungenSuccess, loadChecklistSuccess, loadedAllZaehlerstaende, loadKlarmeldungByIdSchiffSuccess, loadPatrolSuccess, loadPeilungSuccess, loadPositionsSuccess, loadReparaturenSuccess, loadShipSuccess, loadTankSuccess, resetStore, updateChecklistSuccess, updateKlarmeldungSuccess, updatePatrolBesatzung, updatePatrolSuccess, updatePeilungSuccess, updatePositionSuccess, updateReparaturSuccess, updateSaving, updateShipSuccess, updateZaehlerstandSuccess, uploadReparaturFotoSuccess } from "./actions"

export interface State {
    betankungen     : Betankung[]       | undefined
    checklist       : Checklist         | undefined
    klarmeldung     : Klarmeldung       | undefined
    patrol          : Patrol            | undefined
    peilungen       : Peilung[]         | undefined
    positions       : PositionReport[]  | undefined 
    reparaturen     : Reparatur[]       | undefined 
    reparaturfotos  : any[]             | undefined
    saving          : boolean
    ship            : Ship              | undefined
    tanks           : Tank[]            | undefined
    zaehlerstaende  : Zaehlerstand[]    | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    betankungen     : undefined,
    checklist       : undefined,
    klarmeldung     : undefined,
    patrol          : undefined,
    peilungen       : undefined,
    positions       : undefined,
    reparaturen     : undefined,
    reparaturfotos  : undefined,
    saving          : false,
    ship            : undefined,
    tanks           : undefined,
    zaehlerstaende  : undefined,
    isAllDataLoaded : false
}

export const reducer = createReducer(
    initialDataState,

    // store
    on(resetStore, (state, action)  => {
        return Object.assign({}, initialDataState)
    }),

    // besatzung
    on(insertPatrolBesatzungSuccess, (state, action) => {
        let besatzung: Besatzung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBesatzung: Besatzung[] | undefined = checkStateForEmptyArrays(state.patrol?.besatzung)
        clearedBesatzung = [...clearedBesatzung!, ...[besatzung]]
        return {
            ...state,
            patrol: Object.assign({}, state.patrol, { besatzung: clearedBesatzung })
        }
    }),
    on(updatePatrolBesatzung, (state, action) => {
        let cleared = [...state.patrol?.besatzung!]
        cleared = cleared.filter(el => el.id != action.update.id)
        cleared.push(action.update)
        return {
            ...state,
            patrol: Object.assign({}, state.patrol, { besatzung: cleared })
        }
        // let clearedBesatzung: Besatzung[] = state.patrol?.besatzung.filter(el => el.id != action.update.changes.id)!
        // clearedBesatzung.push(action.update.changes as Besatzung)
        // return {
        //     ...state,
        //     patrol: Object.assign({}, state.patrol, { besatzung: clearedBesatzung })
        // }
    }),
    on(deletePatrolBesatzung, (state, action) => {
        const newState = state.patrol?.besatzung.filter(el => el.id !== action.id)
        return {
            ...state,
            patrol: Object.assign({}, state.patrol, { besatzung: newState })
        }
    }),

    // betankung
    on(loadBetankungenSuccess, (state, action) => {
        return {
            ...state,
            betankungen: action.betankungen
        }
    }),
    on(insertBetankungSuccess, (state, action) => {
        let betankung: Betankung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBetankung: Betankung[] | undefined = checkStateForEmptyArrays(state.betankungen)
        clearedBetankung = [...clearedBetankung!, ...[betankung]]
        return {
            ...state,
            betankungen: clearedBetankung
        }
    }),

    // checklist
    on(loadChecklistSuccess, (state, action) => {
        return {
            ...state,
            checklist: action.checklist
        }
    }),
    on(updateChecklistSuccess, (state, action) => {
        let checklist: Checklist = Object.assign({}, action.update)
        return {
            ...state,
            checklist: checklist
        }
    }),

    // Klarmeldung
    on(loadKlarmeldungByIdSchiffSuccess, (state, action) => {
        return {
            ...state,
            klarmeldung: action.klarmeldung
        }
    }),
    on(insertKlarmeldungSuccess, (state, action) => {
        const insert: Klarmeldung = Object.assign({}, action.action.insert, {id: action.id})
        return {
            ...state,
            klarmeldung: insert
        }
    }),
    on(updateKlarmeldungSuccess, (state, action) => {
        return {
            ...state,
            klarmeldung: action.update
        }
    }),

    // patrol
    on(loadPatrolSuccess, (state, action) => {
        return {
            ...state,
            patrol: action.patrol
        }
    }),
    on(initializePatrol, (state, action) => {
        let patrol: Patrol = Object.assign({}, action.initialize)
        return {
            ...state,
            patrol: patrol
        }
    }),
    on(insertPatrolSuccess, (state, action) => {
        let patrol: Patrol = Object.assign({}, action.action.insert, { id: action.id })
        return {
            ...state,
            patrol: patrol
        }
    }),
    on(updatePatrolSuccess, (state, action) => {
        let patrol: Patrol = action.action.update
        return {
            ...state,
            patrol: patrol
        }
    }),
    on(deletePatrolSuccess, (state, action) => {
        return {
            ...state,
            patrol: undefined
        }
    }),

    //peilungen
    on(loadPeilungSuccess, (state, action) => {
        return {
            ...state,
            peilungen: action.peilungen
        }
    }),
    on(insertPeilungSuccess, (state, action) => {
        let peilung: Peilung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPeilung: Peilung[] | undefined = checkStateForEmptyArrays(state.peilungen)
        clearedPeilung = clearedPeilung?.filter(el => el.bezeichnung != action.action.insert.bezeichnung)
        clearedPeilung = [...clearedPeilung!, ...[peilung]]
        return {
            ...state,
            peilungen: clearedPeilung
        }
    }),
    on(updatePeilungSuccess, (state, action) => {
        let clearedPeilungen = [...state.peilungen!]
        clearedPeilungen = clearedPeilungen.filter(el => el.id != action.peilung.id)
        clearedPeilungen.push(action.peilung)
        return {
            ...state,
            peilungen: clearedPeilungen
        }
    }),

    // position
    on(loadPositionsSuccess, (state, action) => {
        return {
            ...state,
            positions: action.positionReport
        }
    }),
    on(insertPositionSuccess, (state, action) => {
        const insert: PositionReport = Object.assign({}, action.action.insert, {id: action.id})
        let cleared: PositionReport[] | undefined = checkStateForEmptyArrays(state.positions)
        cleared = [...cleared!, ...[insert]]
        return {
            ...state,
            positions: cleared
        }
    }),
    on(updatePositionSuccess, (state, action) => {
        let cleared: PositionReport[] | undefined = checkStateForEmptyArrays(state.positions)
        cleared = cleared?.filter(el => el.id != action.update.id)
        cleared = [...cleared!, ...[action.update]]
        return {
            ...state,
            positions: cleared
        }
    }),
    on(deletePositionSuccess, (state, action) => {
        let cleared: PositionReport[] | undefined = checkStateForEmptyArrays(state.positions)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            positions: cleared
        }
    }),

    // reparaturen
    on(loadReparaturenSuccess, (state, action) => {
        return {
            ...state,
            reparaturen: action.reparaturen
        }
    }),
    on(insertReparaturSuccess, (state, action) => {
        let pruefvermerk: Reparatur = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPruefvermerk: Reparatur[] | undefined = checkStateForEmptyArrays(state.reparaturen)
        clearedPruefvermerk = [...clearedPruefvermerk!, ...[pruefvermerk]]
        return {
            ...state,
            reparaturen: clearedPruefvermerk
        }
    }),
    on(updateReparaturSuccess, (state, action) => {
        let cleared: Reparatur[] = state.reparaturen?.filter(el => el.id != action.update.id)!
        let pruefvermerk: Reparatur = Object.assign({}, action.update)
        cleared = [...cleared!, ...[pruefvermerk]]
        return {
            ...state,
            reparaturen: cleared
        }
    }),

    // reparaturfotos
    on(downloadReparaturFotosSuccess, (state, action) => {
        return {
            ...state,
            reparaturfotos: action.fotos
        }
    }),
    on(uploadReparaturFotoSuccess, (state, action) => {
        let reparaturfoto: any = Object.assign({}, action.action.upload, { id: action.id })
        let cleared: any[] | undefined = checkStateForEmptyArrays(state.reparaturfotos)
        cleared = cleared?.filter(el => el.id != action.action.upload.id)
        cleared = (cleared) ? [...cleared!, ...[reparaturfoto]] : [reparaturfoto]
        return {
            ...state,
            reparaturfotos: cleared
        }
    }),
    on(deleteReparaturFotoSuccess, (state, action) => {
        let cleared: any[] | undefined = checkStateForEmptyArrays(state.reparaturfotos)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            reparaturfotos: cleared
        }
    }),

    // saving
    on(updateSaving, (state, action) => {
        return {
            ...state,
            saving: action.update
        }
    }),

    // ship
    on(loadShipSuccess, (state, action) => {
        return {
            ...state,
            ship: action.ship
        }
    }),
    on(updateShipSuccess, (state, action) => {
        return {
            ...state,
            ship: action.update
        }
    }),

    // tank
    on(loadTankSuccess, (state, action) => {
        return {
            ...state,
            tanks: action.tanks
        }
    }),

    // zaehlerstaende
    on(loadedAllZaehlerstaende, (state, action) => {
        return {
            ...state,
            zaehlerstaende: action.zaehlerstaende
        }
    }),
    on(updateZaehlerstandSuccess, (state, action) => {
        let clearedZaehlerstaende: Zaehlerstand[] | undefined = checkStateForEmptyArrays(state.zaehlerstaende)
        clearedZaehlerstaende = clearedZaehlerstaende?.filter(el => el.id != action.action.update.id)
        clearedZaehlerstaende = [...clearedZaehlerstaende!, ...[action.action.update]]
        return {
            ...state,
            zaehlerstaende: clearedZaehlerstaende
        }
    })
)

