import { createReducer, on } from "@ngrx/store"
// import { Checklistitem } from "src/app/core/model/checklistitem.model"
// import { allShipLoaded, pruefvermerkeLoaded, pruefvermerkKategorienLoaded, zaehlerstandstypenLoaded, dienststellenLoaded, loadedZwecke, loadedKennungen, loadedBetriebsstoffe, loadedFunktionen } from "./actions"
import { deleteKennungSuccess, insertKennungSuccess, loadedKennungen, updateKennungSuccess } from './actions'
import { Kennung } from "src/app/core/models/kennung.model"

export interface State {
    // shipSelection: ShipSelection[] | undefined
    // pruefvermerke: Pruefvermerk[] | undefined
    // pruefvermerkKategorien: PruefvermerkKategorien[] | undefined
    // zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    // dienststellen: Dienststelle[] | undefined
    // checklistitems: Checklistitem[] | undefined
    // betriebsstoffe: Betriebsstoff[] | undefined
    // funktionen: Funktion[] | undefined
    // zwecke: Zweck[] | undefined
    kennungen: Kennung[] | undefined
    isAllDataLoaded: boolean
}

export const initialDataState: State = {
    // shipSelection: undefined,
    // pruefvermerke: undefined,
    // pruefvermerkKategorien: undefined,
    // zaehlerstandstypen: undefined,
    // dienststellen: undefined,
    // checklistitems: undefined,
    // betriebsstoffe: undefined,
    // funktionen: undefined,
    kennungen: undefined,
    // zwecke: undefined,
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
    on(loadedKennungen, (state, action) => {
        return {
            ...state,
            kennungen: action.kennungen
        }
    }),
    on(insertKennungSuccess, (state, action) => {
        console.log(action)
        let kennung: Kennung = Object.assign({}, action.action.insert, { id: action.id })
        let clearedKennungen: Kennung[] | undefined = state.kennungen
        // clearedKennungen = clearedKennungen?.filter(el => el.bezeichnung != action.action.insert.bezeichnung)
        clearedKennungen = [...clearedKennungen!, ...[kennung]]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    on(updateKennungSuccess, (state, action) => {
        let clearedKennungen: Kennung[] | undefined = state.kennungen
        clearedKennungen = clearedKennungen?.filter(el => el.id != action.update.id)
        clearedKennungen = [...clearedKennungen!, ...[action.update]]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    on(deleteKennungSuccess, (state, action) => {
        let clearedKennungen: Kennung[] | undefined = state.kennungen
        clearedKennungen = clearedKennungen?.filter(el => el.id != action.id)
        clearedKennungen = [...clearedKennungen!]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    // on(loadedZwecke, (state, action) => {
    //     return {
    //         ...state,
    //         zwecke: action.zwecke
    //     }
    // })
)
