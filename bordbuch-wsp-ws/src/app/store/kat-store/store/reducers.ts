import { createReducer, on } from "@ngrx/store"
// import { Checklistitem } from "src/app/core/model/checklistitem.model"
// import { allShipLoaded, pruefvermerkeLoaded, pruefvermerkKategorienLoaded, zaehlerstandstypenLoaded, dienststellenLoaded, loadedZwecke, loadedKennungen, loadedBetriebsstoffe, loadedFunktionen } from "./actions"
import { deleteKennungSuccess, deleteZweckSuccess, insertKennungSuccess, insertZweckSuccess, loadedKennungen, loadedZweck, updateKennungSuccess, updateZweckSuccess } from './actions'
import { Kat } from "src/app/core/models/kat.model"

export interface State {
    // shipSelection: ShipSelection[] | undefined
    // pruefvermerke: Pruefvermerk[] | undefined
    
    betriebsstoffe: Kat[] | undefined
    checkliste: Kat[] | undefined
    dienststellen: Kat[] | undefined
    funktionen: Kat[] | undefined
    kennungen: Kat[] | undefined
    pruefvermerkKategorien: Kat[] | undefined
    zaehlerstandstypen: Kat[] | undefined
    zweck: Kat[] | undefined
    
    isAllDataLoaded: boolean
}

export const initialDataState: State = {
    // shipSelection: undefined,
    // pruefvermerke: undefined,
    
    betriebsstoffe: undefined,
    checkliste: undefined,
    dienststellen: undefined,
    funktionen: undefined,
    kennungen: undefined,
    pruefvermerkKategorien: undefined,
    zaehlerstandstypen: undefined,
    zweck: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    // on(allShipLoaded, (state, action) => {
    //     return {
    //         ...state,
    //         shipSelection: action.shipSelection
    //     }
    // }),
    // on(pruefvermerkeLoaded, (state, action) => {
    //     return {
    //         ...state,
    //         pruefvermerke: action.pruefvermerke
    //     }
    // }),
    // on(pruefvermerkKategorienLoaded, (state, action) => {
    //     return {
    //         ...state,
    //         pruefvermerkKategorien: action.pruefvermerkKategorien
    //     }
    // }),
    // on(zaehlerstandstypenLoaded, (state, action) => {
    //     return {
    //         ...state,
    //         zaehlerstandstypen: action.zaehlerstandstypen
    //     }
    // }),
    // on(dienststellenLoaded, (state, action) => {
    //     return {
    //         ...state,
    //         dienststellen: action.dienststellen
    //     }
    // }),
    // on(loadedBetriebsstoffe, (state, action) => {
    //     return {
    //         ...state,
    //         betriebsstoffe: action.betriebsstoffe
    //     }
    // }),
    // on(loadedFunktionen, (state, action) => {
    //     return {
    //         ...state,
    //         funktionen: action.funktionen
    //     }
    // }),

    // kennungen
    on(loadedKennungen, (state, action) => {
        return {
            ...state,
            kennungen: action.kat
        }
    }),
    on(insertKennungSuccess, (state, action) => {
        console.log(action)
        let kennung: Kat = Object.assign({}, action.action.insert, { id: action.id })
        let clearedKennungen: Kat[] | undefined = state.kennungen
        // clearedKennungen = clearedKennungen?.filter(el => el.bezeichnung != action.action.insert.bezeichnung)
        clearedKennungen = [...clearedKennungen!, ...[kennung]]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    on(updateKennungSuccess, (state, action) => {
        let clearedKennungen: Kat[] | undefined = state.kennungen
        clearedKennungen = clearedKennungen?.filter(el => el.id != action.update.id)
        clearedKennungen = [...clearedKennungen!, ...[action.update]]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    on(deleteKennungSuccess, (state, action) => {
        let clearedKennungen: Kat[] | undefined = state.kennungen
        clearedKennungen = clearedKennungen?.filter(el => el.id != action.id)
        clearedKennungen = [...clearedKennungen!]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),

    // zweck
    on(loadedZweck, (state, action) => {
        return {
            ...state,
            zweck: action.kat
        }
    }),
    on(insertZweckSuccess, (state, action) => {
        console.log(action)
        let zweck: Kat = Object.assign({}, action.action.insert, { id: action.id })
        let clearedZweck: Kat[] | undefined = state.zweck
        clearedZweck = [...clearedZweck!, ...[zweck]]
        return {
            ...state,
            zweck: clearedZweck
        }
    }),
    on(updateZweckSuccess, (state, action) => {
        console.log(action)
        let clearedZweck: Kat[] | undefined = state.zweck
        clearedZweck = clearedZweck?.filter(el => el.id != action.update.id)
        clearedZweck = [...clearedZweck!, ...[action.update]]
        return {
            ...state,
            zweck: clearedZweck
        }
    }),
    on(deleteZweckSuccess, (state, action) => {
        console.log(action)
        let clearedZweck: Kat[] | undefined = state.zweck
        clearedZweck = clearedZweck?.filter(el => el.id != action.id)
        clearedZweck = [...clearedZweck!]
        return {
            ...state,
            zweck: clearedZweck
        }
    })
)
