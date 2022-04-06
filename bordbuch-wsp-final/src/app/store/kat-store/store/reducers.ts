import { createReducer, on } from "@ngrx/store"
import { loadedAllStatus, allShipLoaded, pruefvermerkeLoaded, pruefvermerkKategorienLoaded, zaehlerstandstypenLoaded, dienststellenLoaded, loadedZwecke, loadedKennungen, loadedBetriebsstoffe, loadedFunktionen, loadLastPositionsSuccess } from "./actions"
import { State } from "../state"

export const initialDataState: State = {
    shipSelection       : undefined,
    pruefvermerke       : undefined,
    pruefvermerkKategorien: undefined,
    zaehlerstandstypen  : undefined,
    dienststellen       : undefined,
    checklistitems      : undefined,
    betriebsstoffe      : undefined,
    funktionen          : undefined,
    kennungen           : undefined,
    lastPositions       : undefined,
    status              : undefined,
    zwecke              : undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => {
        return {
            ...state,
            shipSelection: action.shipSelection
        }
    }),
    on(loadLastPositionsSuccess, (state, action) => {
        return {
            ...state,
            lastPositions: action.lastPositions
        }
    }),
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            ...state,
            pruefvermerke: action.pruefvermerke
        }
    }),
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            ...state,
            pruefvermerke: action.pruefvermerke
        }
    }),
    on(pruefvermerkKategorienLoaded, (state, action) => {
        return {
            ...state,
            pruefvermerkKategorien: action.pruefvermerkKategorien
        }
    }),
    on(zaehlerstandstypenLoaded, (state, action) => {
        return {
            ...state,
            zaehlerstandstypen: action.zaehlerstandstypen
        }
    }),
    on(dienststellenLoaded, (state, action) => {
        return {
            ...state,
            dienststellen: action.dienststellen
        }
    }),
    on(loadedBetriebsstoffe, (state, action) => {
        return {
            ...state,
            betriebsstoffe: action.betriebsstoffe
        }
    }),
    on(loadedFunktionen, (state, action) => {
        return {
            ...state,
            funktionen: action.funktionen
        }
    }),
    on(loadedKennungen, (state, action) => {
        return {
            ...state,
            kennungen: action.kennungen
        }
    }),

    // status
    on(loadedAllStatus, (state, action) => {
        return {
            ...state,
            status: action.status
        }
    }),

    on(loadedZwecke, (state, action) => {
        return {
            ...state,
            zwecke: action.zwecke
        }
    })
)
