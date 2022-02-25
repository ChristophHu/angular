import { createReducer, on } from "@ngrx/store"
import { Betankung } from "src/app/core/models/betankung"
import { Checklist } from "src/app/core/models/checklist.model"
import { Peilung } from "src/app/core/models/peilung.model"
import { Reparatur } from "src/app/core/models/reparatur.model"
import { Standort } from "src/app/core/models/standort.model"
import { Streife } from "src/app/core/models/streife.model"
import { Tank } from "src/app/core/models/tank.model"
import { Zaehlerstand } from "src/app/core/models/zaehlerstand.model"
import { checkStateForEmptyArrays } from "src/app/shared/utils"
import { clearReparaturen, deleteBetankungSuccess, deletePeilungSuccess, deleteReparaturFotoSuccess, deleteReparaturSuccess, deleteShipChecklistSuccess, deleteStandortSuccess, deleteStreifeSuccess, deleteTankSuccess, deleteZaehlerstandSuccess, downloadReparaturFotosSuccess, insertBetankungSuccess, insertPeilungSuccess, insertReparaturSuccess, insertShipChecklistSuccess, insertStandortSuccess, insertStreifeSuccess, insertTankSuccess, insertZaehlerstandSuccess, loadedAllBetankungen, loadedAllLastStandorte, loadedAllReparaturen, loadedAllShipChecklists, loadedAllStandorte, loadedAllStreifen, loadedAllZaehlerstaende, loadedTanks, loadPeilungenById, loadPeilungenByIdSuccess, loadPeilungenSuccess, updateBetankungSuccess, updatePeilungSuccess, updateReparaturSuccess, updateStandortSuccess, updateStreifeSuccess, updateTankSuccess, updateZaehlerstandSuccess, uploadReparaturFotoSuccess } from "./actions"

export interface State {
    checklists      : Checklist[]       | undefined
    betankungen     : Betankung[]       | undefined
    reparaturen     : Reparatur[]       | undefined
    reparaturfotos  : any[]             | undefined
    laststandorte   : Standort[]        | undefined
    peilungen       : Peilung[]         | undefined
    standorte       : Standort[]        | undefined
    streifen        : Streife[]         | undefined
    tanks           : Tank[]            | undefined
    zaehlerstaende  : Zaehlerstand[]    | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    checklists      : undefined,
    betankungen     : undefined,
    reparaturen     : undefined,
    reparaturfotos  : undefined,
    laststandorte   : undefined,
    peilungen       : undefined,
    standorte       : undefined,
    streifen        : undefined,
    tanks           : undefined,
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
        let clearedBetankungen: Betankung[] | undefined = checkStateForEmptyArrays(state.betankungen)
        clearedBetankungen = clearedBetankungen?.filter(el => el.id != action.id)
        clearedBetankungen = [...clearedBetankungen!, ...[betankung]]
        return {
            ...state,
            betankungen: clearedBetankungen
        }
    }),
    on(updateBetankungSuccess, (state, action) => {
        let clearedBetankungen: Betankung[] | undefined = checkStateForEmptyArrays(state.betankungen)
        clearedBetankungen = clearedBetankungen?.filter(el => el.id != action.action.update.id)
        clearedBetankungen = [...clearedBetankungen!, ...[action.action.update]]
        return {
            ...state,
            betankungen: clearedBetankungen
        }
    }),
    on(deleteBetankungSuccess, (state, action) => {
        let clearedBetankungen: Betankung[] | undefined = checkStateForEmptyArrays(state.betankungen)
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
        let clearedCheckliste: Checklist[] | undefined = checkStateForEmptyArrays(state.checklists)
        clearedCheckliste = clearedCheckliste?.filter(el => el.id_schiff != action.action.insert.id_schiff)
        clearedCheckliste = [...clearedCheckliste!, ...[checklist]]
        return {
            ...state,
            checklists: clearedCheckliste
        }
    }),
    on(deleteShipChecklistSuccess, (state, action) => {
        let clearedShipCheckliste: Checklist[] | undefined = checkStateForEmptyArrays(state.checklists)
        clearedShipCheckliste = clearedShipCheckliste?.filter(el => el.id != action.id && el.datum != action.date)
        clearedShipCheckliste = [...clearedShipCheckliste!]
        return {
            ...state,
            checklists: clearedShipCheckliste
        }
    }),

    // peilungen
    on(loadPeilungenByIdSuccess, (state, action) => {
        return {
            ...state,
            peilungen: action.peilungen
        }
    }),
    on(loadPeilungenSuccess, (state, action) => {
        return {
            ...state,
            peilungen: action.peilungen
        }
    }),
    on(insertPeilungSuccess, (state, action) => {
        let peilung: Peilung = Object.assign({}, action.action.insert, { id: action.id })
        let cleared: Peilung[] | undefined = checkStateForEmptyArrays(state.peilungen)
        cleared = cleared?.filter(el => el.id != action.action.insert.id)
        cleared = [...cleared!, ...[peilung]]
        return {
            ...state,
            peilungen: cleared
        }
    }),
    on(updatePeilungSuccess, (state, action) => {
        // let reparatur: Reparatur = Object.assign({}, action.action.update, { id: action.id })
        let cleared: Peilung[] | undefined = checkStateForEmptyArrays(state.peilungen)
        cleared = cleared?.filter(el => el.id != action.action.update.id)
        cleared = [...cleared!, ...[action.action.update]]
        return {
            ...state,
            peilungen: cleared
        }
    }),
    on(deletePeilungSuccess, (state, action) => {
        let cleared: Peilung[] | undefined = checkStateForEmptyArrays(state.peilungen)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            peilungen: cleared
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
        let clearedReparaturen: Reparatur[] | undefined = checkStateForEmptyArrays(state.reparaturen)
        clearedReparaturen = clearedReparaturen?.filter(el => el.id != action.action.insert.id)
        clearedReparaturen = [...clearedReparaturen!, ...[reparatur]]
        return {
            ...state,
            reparaturen: clearedReparaturen
        }
    }),
    on(updateReparaturSuccess, (state, action) => {
        // let reparatur: Reparatur = Object.assign({}, action.action.update, { id: action.id })
        let clearedReparaturen: Reparatur[] | undefined = checkStateForEmptyArrays(state.reparaturen)
        clearedReparaturen = clearedReparaturen?.filter(el => el.id != action.action.update.id)
        clearedReparaturen = [...clearedReparaturen!, ...[action.action.update]]
        return {
            ...state,
            reparaturen: clearedReparaturen
        }
    }),
    on(deleteReparaturSuccess, (state, action) => {
        let clearedReparaturen: Reparatur[] | undefined = checkStateForEmptyArrays(state.reparaturen)
        clearedReparaturen = clearedReparaturen?.filter(el => el.id != action.id)
        clearedReparaturen = [...clearedReparaturen!]
        return {
            ...state,
            reparaturen: clearedReparaturen
        }
    }),
    on(clearReparaturen, (state, action) => {
        return {
            ...state,
            reparaturen: []
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
        let cleared: Standort[] | undefined = checkStateForEmptyArrays(state.standorte)
        cleared = cleared?.filter(el => el.id != action.action.insert.id)
        cleared = [...cleared!, ...[standort]]
        return {
            ...state,
            standorte: cleared
        }
    }),
    on(updateStandortSuccess, (state, action) => {
        // let standort: Standort = Object.assign({}, action.action.update, { id: action.id })
        let cleared: Standort[] | undefined = checkStateForEmptyArrays(state.standorte)
        cleared = cleared?.filter(el => el.id != action.action.update.id)
        cleared = [...cleared!, ...[action.action.update]]
        return {
            ...state,
            standorte: cleared
        }
    }),
    on(deleteStandortSuccess, (state, action) => {
        let cleared: Standort[] | undefined = checkStateForEmptyArrays(state.laststandorte)
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
        let cleared: Streife[] | undefined = checkStateForEmptyArrays(state.streifen)
        cleared = cleared?.filter(el => el.id != action.action.insert.id)
        cleared = [...cleared!, ...[streife]]
        return {
            ...state,
            streifen: cleared
        }
    }),
    on(updateStreifeSuccess, (state, action) => {
        let cleared: Streife[] | undefined = checkStateForEmptyArrays(state.streifen)
        cleared = cleared?.filter(el => el.id != action.action.update.id)
        cleared = [...cleared!, ...[action.action.update]]
        return {
            ...state,
            streifen: cleared
        }
    }),
    on(deleteStreifeSuccess, (state, action) => {
        let cleared: Streife[] | undefined = checkStateForEmptyArrays(state.streifen)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            streifen: cleared
        }
    }),

    // tanks
    on(loadedTanks, (state, action) => {
        return {
            ...state,
            tanks: action.tanks
        }
    }),
    on(insertTankSuccess, (state, action) => {
        let tank: Tank = Object.assign({}, action.action.insert, { id: action.id })
        let cleared: Tank[] | undefined = checkStateForEmptyArrays(state.tanks)
        cleared = cleared?.filter(el => el.id != action.action.insert.id)
        cleared = [...cleared!, ...[tank]]
        return {
            ...state,
            tanks: cleared
        }
    }),
    on(updateTankSuccess, (state, action) => {
        let cleared: Tank[] | undefined = checkStateForEmptyArrays(state.tanks)
        cleared = cleared?.filter(el => el.id != action.action.update.id)
        cleared = [...cleared!, ...[action.action.update]]
        return {
            ...state,
            tanks: cleared
        }
    }),
    on(deleteTankSuccess, (state, action) => {
        let cleared: Tank[] | undefined = checkStateForEmptyArrays(state.tanks)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            tanks: cleared
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
        let clearedZaehlerstaende: Zaehlerstand[] | undefined = checkStateForEmptyArrays(state.zaehlerstaende)
        clearedZaehlerstaende = clearedZaehlerstaende?.filter(el => el.id != action.id)
        clearedZaehlerstaende = [...clearedZaehlerstaende!, ...[zaehlerstand]]
        return {
            ...state,
            zaehlerstaende: clearedZaehlerstaende
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
    }),
    on(deleteZaehlerstandSuccess, (state, action) => {
        let clearedZaehlerstaende: Zaehlerstand[] | undefined = checkStateForEmptyArrays(state.zaehlerstaende)
        clearedZaehlerstaende = clearedZaehlerstaende?.filter(el => el.id != action.id)
        clearedZaehlerstaende = [...clearedZaehlerstaende!]
        return {
            ...state,
            zaehlerstaende: clearedZaehlerstaende
        }
    })
)