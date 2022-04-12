import { createReducer, on } from "@ngrx/store"
import { Klarmeldung } from "src/app/core/model/klarmeldung.model"
import { PositionReport } from "src/app/core/model/positionreport.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"
import { checkStateForEmptyArrays } from "src/app/shared/utils"
import { deletePositionSuccess, insertKlarmeldungSuccess, insertPositionSuccess, loadedAllZaehlerstaende, loadKlarmeldungByIdSchiffSuccess, loadPositionsSuccess, updateKlarmeldungSuccess, updatePositionSuccess, updateSaving, updateZaehlerstandSuccess } from "./actions"

export interface State {
    klarmeldung     : Klarmeldung       | undefined
    positions       : PositionReport[]  | undefined  
    saving          : boolean
    zaehlerstaende  : Zaehlerstand[]    | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    klarmeldung     : undefined,
    positions       : undefined,
    saving          : false,
    zaehlerstaende  : undefined,
    isAllDataLoaded : false
}

export const reducer = createReducer(
    initialDataState,

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

    // saving
    
    on(updateSaving, (state, action) => {
        return {
            ...state,
            saving: action.update
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
