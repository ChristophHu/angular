import { createReducer, on } from "@ngrx/store"
import { Betankung } from "src/app/core/models/betankung"
import { Checklist } from "src/app/core/models/checklist.model"
import { Reparatur } from "src/app/core/models/reparatur.model"
import { Standort } from "src/app/core/models/standort.model"
import { Streife } from "src/app/core/models/streife.model"
import { Zaehlerstand } from "src/app/core/models/zaehlerstand.model"
import { deleteBetankungSuccess, deleteReparaturSuccess, deleteShipChecklistSuccess, deleteStandortSuccess, deleteStreifeSuccess, deleteZaehlerstandSuccess, insertBetankungSuccess, insertReparaturSuccess, insertShipChecklistSuccess, insertStandortSuccess, insertStreifeSuccess, insertZaehlerstandSuccess, loadedAllBetankungen, loadedAllLastStandorte, loadedAllReparaturen, loadedAllShipChecklists, loadedAllStandorte, loadedAllStreifen, loadedAllZaehlerstaende, updateBetankungSuccess, updateReparaturSuccess, updateStandortSuccess, updateStreifeSuccess, updateZaehlerstandSuccess } from "./actions"

export interface State {
    checklists      : Checklist[]       | undefined
    betankungen     : Betankung[]       | undefined
    reparaturen     : Reparatur[]       | undefined
    laststandorte   : Standort[]        | undefined
    standorte       : Standort[]        | undefined
    streifen        : Streife[]         | undefined
    zaehlerstaende  : Zaehlerstand[]    | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    checklists      : undefined,
    betankungen     : undefined,
    reparaturen     : undefined,
    laststandorte   : undefined,
    standorte       : undefined,
    streifen        : undefined,
    zaehlerstaende  : undefined,
    isAllDataLoaded : false
}

export const reducer = createReducer(
    initialDataState,

    // betankungen
    on(loadedAllBetankungen, (state, action) => {
        return {
            ...state,
            betankungen: action.betankungen
        }
    }),
    on(insertBetankungSuccess, (state, action) => {
        let betankung: Betankung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBetankungen: Betankung[] | undefined = state.betankungen
        clearedBetankungen = clearedBetankungen?.filter(el => el.id != action.id)
        clearedBetankungen = [...clearedBetankungen!, ...[betankung]]
        return {
            ...state,
            betankungen: clearedBetankungen
        }
    }),
    on(updateBetankungSuccess, (state, action) => {
        let clearedBetankungen: Betankung[] | undefined = state.betankungen
        clearedBetankungen = clearedBetankungen?.filter(el => el.id != action.action.update.id)
        clearedBetankungen = [...clearedBetankungen!, ...[action.action.update]]
        return {
            ...state,
            betankungen: clearedBetankungen
        }
    }),
    on(deleteBetankungSuccess, (state, action) => {
        let clearedBetankungen: Betankung[] | undefined = state.betankungen
        clearedBetankungen = clearedBetankungen?.filter(el => el.id != action.id)
        clearedBetankungen = [...clearedBetankungen!]
        return {
            ...state,
            betankungen: clearedBetankungen
        }
    }),

    // checklists
    on(loadedAllShipChecklists, (state, action) => {
        return {
            ...state,
            checklists: action.checklists
        }
    }),
    on(insertShipChecklistSuccess, (state, action) => {
        let checklist: Checklist = Object.assign({}, action.action.insert, { id: action.id })
        let clearedCheckliste: Checklist[] | undefined = state.checklists
        clearedCheckliste = clearedCheckliste?.filter(el => el.id_schiff != action.action.insert.id_schiff)
        clearedCheckliste = [...clearedCheckliste!, ...[checklist]]
        return {
            ...state,
            checklists: clearedCheckliste
        }
    }),
    on(deleteShipChecklistSuccess, (state, action) => {
        let clearedShipCheckliste: Checklist[] | undefined = state.checklists
        clearedShipCheckliste = clearedShipCheckliste?.filter(el => el.id != action.id && el.datum != action.date)
        clearedShipCheckliste = [...clearedShipCheckliste!]
        return {
            ...state,
            checklists: clearedShipCheckliste
        }
    }),

    // reparaturen
    on(loadedAllReparaturen, (state, action) => {
        return {
            ...state,
            reparaturen: action.reparaturen
        }
    }),
    on(insertReparaturSuccess, (state, action) => {
        let reparatur: Reparatur = Object.assign({}, action.action.insert, { id: action.id })
        let clearedReparaturen: Reparatur[] | undefined = state.reparaturen
        clearedReparaturen = clearedReparaturen?.filter(el => el.id != action.action.insert.id)
        clearedReparaturen = [...clearedReparaturen!, ...[reparatur]]
        return {
            ...state,
            reparaturen: clearedReparaturen
        }
    }),
    on(updateReparaturSuccess, (state, action) => {
        // let reparatur: Reparatur = Object.assign({}, action.action.update, { id: action.id })
        let clearedReparaturen: Reparatur[] | undefined = state.reparaturen
        clearedReparaturen = clearedReparaturen?.filter(el => el.id != action.action.update.id)
        clearedReparaturen = [...clearedReparaturen!, ...[action.action.update]]
        return {
            ...state,
            reparaturen: clearedReparaturen
        }
    }),
    on(deleteReparaturSuccess, (state, action) => {
        let clearedReparaturen: Reparatur[] | undefined = state.reparaturen
        clearedReparaturen = clearedReparaturen?.filter(el => el.id != action.id)
        clearedReparaturen = [...clearedReparaturen!]
        return {
            ...state,
            reparaturen: clearedReparaturen
        }
    }),

    // laststandorte
    on(loadedAllLastStandorte, (state, action) => {
        return {
            ...state,
            laststandorte: action.laststandorte
        }
    }),
    

    // standorte
    on(loadedAllStandorte, (state, action) => {
        return {
            ...state,
            standorte: action.standorte
        }
    }),
    on(insertStandortSuccess, (state, action) => {
        let standort: Standort = Object.assign({}, action.action.insert, { id: action.id })
        let cleared: Standort[] | undefined = state.standorte
        cleared = cleared?.filter(el => el.id != action.action.insert.id)
        cleared = [...cleared!, ...[standort]]
        return {
            ...state,
            standorte: cleared
        }
    }),
    on(updateStandortSuccess, (state, action) => {
        // let standort: Standort = Object.assign({}, action.action.update, { id: action.id })
        let cleared: Standort[] | undefined = state.standorte
        cleared = cleared?.filter(el => el.id != action.action.update.id)
        cleared = [...cleared!, ...[action.action.update]]
        return {
            ...state,
            standorte: cleared
        }
    }),
    on(deleteStandortSuccess, (state, action) => {
        let cleared: Standort[] | undefined = state.laststandorte
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            standorte: cleared
        }
    }),

    // streifen
    on(loadedAllStreifen, (state, action) => {
        return {
            ...state,
            streifen: action.streifen
        }
    }),
    on(insertStreifeSuccess, (state, action) => {
        let streife: Streife = Object.assign({}, action.action.insert, { id: action.id })
        let cleared: Streife[] | undefined = state.streifen
        cleared = cleared?.filter(el => el.id != action.action.insert.id)
        cleared = [...cleared!, ...[streife]]
        return {
            ...state,
            streifen: cleared
        }
    }),
    on(updateStreifeSuccess, (state, action) => {
        let cleared: Streife[] | undefined = state.streifen
        cleared = cleared?.filter(el => el.id != action.action.update.id)
        cleared = [...cleared!, ...[action.action.update]]
        return {
            ...state,
            streifen: cleared
        }
    }),
    on(deleteStreifeSuccess, (state, action) => {
        let cleared: Streife[] | undefined = state.streifen
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            streifen: cleared
        }
    }),

    // zaehlerstaende
    on(loadedAllZaehlerstaende, (state, action) => {
        return {
            ...state,
            zaehlerstaende: action.zaehlerstaende
        }
    }),
    on(insertZaehlerstandSuccess, (state, action) => {
        let zaehlerstand: Zaehlerstand = Object.assign({}, action.action.insert, { id: action.id })
        let clearedZaehlerstaende: Zaehlerstand[] | undefined = state.zaehlerstaende
        clearedZaehlerstaende = clearedZaehlerstaende?.filter(el => el.id != action.id)
        clearedZaehlerstaende = [...clearedZaehlerstaende!, ...[zaehlerstand]]
        return {
            ...state,
            zaehlerstaende: clearedZaehlerstaende
        }
    }),
    on(updateZaehlerstandSuccess, (state, action) => {
        let clearedZaehlerstaende: Zaehlerstand[] | undefined = state.zaehlerstaende
        clearedZaehlerstaende = clearedZaehlerstaende?.filter(el => el.id != action.action.update.id)
        clearedZaehlerstaende = [...clearedZaehlerstaende!, ...[action.action.update]]
        return {
            ...state,
            zaehlerstaende: clearedZaehlerstaende
        }
    }),
    on(deleteZaehlerstandSuccess, (state, action) => {
        let clearedZaehlerstaende: Zaehlerstand[] | undefined = state.zaehlerstaende
        clearedZaehlerstaende = clearedZaehlerstaende?.filter(el => el.id != action.id)
        clearedZaehlerstaende = [...clearedZaehlerstaende!]
        return {
            ...state,
            zaehlerstaende: clearedZaehlerstaende
        }
    })
)
