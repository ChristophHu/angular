import { createReducer, on } from "@ngrx/store"
// import { Checklistitem } from "src/app/core/model/checklistitem.model"
// import { allShipLoaded, pruefvermerkeLoaded, pruefvermerkKategorienLoaded, zaehlerstandstypenLoaded, dienststellenLoaded, loadedZwecke, loadedKennungen, loadedBetriebsstoffe, loadedFunktionen } from "./actions"
import { deleteBetriebsstoffSuccess, deleteChecklistSuccess, deleteDienststelleSuccess, deleteFunktionSuccess, deleteKennungSuccess, deletePruefvermerkkategorieSuccess, deletePruefvermerkSuccess, deleteSchiffSuccess, deleteStatusSuccess, deleteZaehlerstandstypSuccess, deleteZweckSuccess, insertBetriebsstoffSuccess, insertChecklistSuccess, insertDienststelleSuccess, insertFunktionSuccess, insertKennungSuccess, insertPruefvermerkkategorieSuccess, insertPruefvermerkSuccess, insertSchiffSuccess, insertStatusSuccess, insertZaehlerstandstypSuccess, insertZweckSuccess, loadedAllStatus, loadedBetriebsstoffe, loadedCheckliste, loadedDienststellen, loadedFunktionen, loadedKennungen, loadedPruefvermerke, loadedPruefvermerkkategorien, loadedSchiffe, loadedZaehlerstandstypen, loadedZweck, updateBetriebsstoffSuccess, updateChecklistSuccess, updateDienststelleSuccess, updateFunktionSuccess, updateKennungSuccess, updatePruefvermerkkategorieSuccess, updatePruefvermerkSuccess, updateSchiffSuccess, updateStatusSuccess, updateZaehlerstandstypSuccess, updateZweckSuccess } from './actions'
import { Kat } from "src/app/core/models/kat.model"
import { Pruefvermerk } from "src/app/core/models/pruefvermerk.model"
import { Zaehlerstandstyp } from "src/app/core/models/zaehlerstandstyp.model"
import { Dienststelle } from "src/app/core/models/dienststelle.model"
import { Schiff } from "src/app/core/models/schiff.model"
import { Status } from "src/app/core/models/reparatur-status.model"
import { checkStateForEmptyArrays } from "src/app/shared/utils"

export interface State {
    // shipSelection: ShipSelection[] | undefined
    // pruefvermerke: Pruefvermerk[] | undefined
    betriebsstoffe: Kat[] | undefined
    checkliste: Kat[] | undefined
    dienststellen: Dienststelle[] | undefined
    funktionen: Kat[] | undefined
    kennungen: Kat[] | undefined
    pruefvermerke: Pruefvermerk[] | undefined
    pruefvermerkKategorien: Kat[] | undefined
    schiffe: Schiff[] | undefined
    status: Status[] | undefined
    zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    zweck: Kat[] | undefined  
    isAllDataLoaded: boolean
}

export const initialDataState: State = {
    // shipSelection: undefined,
    // pruefvermerke: undefined,
    betriebsstoffe  : undefined,
    checkliste      : undefined,
    dienststellen   : undefined,
    funktionen      : undefined,
    kennungen       : undefined,
    pruefvermerke   : undefined,
    pruefvermerkKategorien: undefined,
    schiffe         : undefined,
    status          : undefined,
    zaehlerstandstypen: undefined,
    zweck           : undefined,
    isAllDataLoaded : false
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

    // betriebsstoffe
    on(loadedBetriebsstoffe, (state, action) => {
        return {
            ...state,
            betriebsstoffe: action.kat
        }
    }),
    on(insertBetriebsstoffSuccess, (state, action) => {
        let betriebsstoff: Kat = Object.assign({}, action.action.insert, { id: action.id })
        let clearedBetriebsstoffe: Kat[] | undefined = checkStateForEmptyArrays(state.betriebsstoffe)
        clearedBetriebsstoffe = [...clearedBetriebsstoffe!, ...[betriebsstoff]]
        return {
            ...state,
            betriebsstoffe: clearedBetriebsstoffe
        }
    }),
    on(updateBetriebsstoffSuccess, (state, action) => {
        let clearedBetriebsstoffe: Kat[] | undefined = checkStateForEmptyArrays(state.betriebsstoffe)
        clearedBetriebsstoffe = clearedBetriebsstoffe?.filter(el => el.id != action.update.id)
        clearedBetriebsstoffe = [...clearedBetriebsstoffe!, ...[action.update]]
        return {
            ...state,
            betriebsstoffe: clearedBetriebsstoffe
        }
    }),
    on(deleteBetriebsstoffSuccess, (state, action) => {
        let clearedBetriebsstoffe: Kat[] | undefined = checkStateForEmptyArrays(state.betriebsstoffe)
        clearedBetriebsstoffe = clearedBetriebsstoffe?.filter(el => el.id != action.id)
        clearedBetriebsstoffe = [...clearedBetriebsstoffe!]
        return {
            ...state,
            betriebsstoffe: clearedBetriebsstoffe
        }
    }),

    // checkliste
    on(loadedCheckliste, (state, action) => {
        return {
            ...state,
            checkliste: action.kat
        }
    }),
    on(insertChecklistSuccess, (state, action) => {
        let checklist: Kat = Object.assign({}, action.action.insert, { id: action.id })
        let clearedCheckliste: Kat[] | undefined = checkStateForEmptyArrays(state.checkliste)
        clearedCheckliste = [...clearedCheckliste!, ...[checklist]]
        return {
            ...state,
            checkliste: clearedCheckliste
        }
    }),
    on(updateChecklistSuccess, (state, action) => {
        let clearedCheckliste: Kat[] | undefined = checkStateForEmptyArrays(state.checkliste)
        clearedCheckliste = clearedCheckliste?.filter(el => el.id != action.update.id)
        clearedCheckliste = [...clearedCheckliste!, ...[action.update]]
        return {
            ...state,
            checkliste: clearedCheckliste
        }
    }),
    on(deleteChecklistSuccess, (state, action) => {
        let clearedCheckliste: Kat[] | undefined = checkStateForEmptyArrays(state.checkliste)
        clearedCheckliste = clearedCheckliste?.filter(el => el.id != action.id)
        clearedCheckliste = [...clearedCheckliste!]
        return {
            ...state,
            checkliste: clearedCheckliste
        }
    }),

    // dienststellen
    on(loadedDienststellen, (state, action) => {
        return {
            ...state,
            dienststellen: action.dienststelle
        }
    }),
    on(insertDienststelleSuccess, (state, action) => {
        let dienststelle: Dienststelle = Object.assign({}, action.action.insert, { id: action.id })
        let clearedDienststellen: Dienststelle[] | undefined = checkStateForEmptyArrays(state.dienststellen)
        clearedDienststellen = [...clearedDienststellen!, ...[dienststelle]]
        return {
            ...state,
            dienststellen: clearedDienststellen
        }
    }),
    on(updateDienststelleSuccess, (state, action) => {
        let clearedDienststellen: Dienststelle[] | undefined = checkStateForEmptyArrays(state.dienststellen)
        clearedDienststellen = clearedDienststellen?.filter(el => el.id != action.update.id)
        clearedDienststellen = [...clearedDienststellen!, ...[action.update]]
        return {
            ...state,
            dienststellen: clearedDienststellen
        }
    }),
    on(deleteDienststelleSuccess, (state, action) => {
        let clearedDienststellen: Dienststelle[] | undefined = checkStateForEmptyArrays(state.dienststellen)
        clearedDienststellen = clearedDienststellen?.filter(el => el.id != action.id)
        clearedDienststellen = [...clearedDienststellen!]
        return {
            ...state,
            dienststellen: clearedDienststellen
        }
    }),

    // funktionen
    on(loadedFunktionen, (state, action) => {
        return {
            ...state,
            funktionen: action.kat
        }
    }),
    on(insertFunktionSuccess, (state, action) => {
        let funktion: Kat = Object.assign({}, action.action.insert, { id: action.id })
        let clearedFunktionen: Kat[] | undefined = checkStateForEmptyArrays(state.funktionen)
        clearedFunktionen = [...clearedFunktionen!, ...[funktion]]
        return {
            ...state,
            funktionen: clearedFunktionen
        }
    }),
    on(updateFunktionSuccess, (state, action) => {
        let clearedFunktionen: Kat[] | undefined = checkStateForEmptyArrays(state.funktionen)
        clearedFunktionen = clearedFunktionen?.filter(el => el.id != action.update.id)
        clearedFunktionen = [...clearedFunktionen!, ...[action.update]]
        return {
            ...state,
            funktionen: clearedFunktionen
        }
    }),
    on(deleteFunktionSuccess, (state, action) => {
        let clearedFunktionen: Kat[] | undefined = checkStateForEmptyArrays(state.funktionen)
        clearedFunktionen = clearedFunktionen?.filter(el => el.id != action.id)
        clearedFunktionen = [...clearedFunktionen!]
        return {
            ...state,
            funktionen: clearedFunktionen
        }
    }),

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
        let clearedKennungen: Kat[] | undefined = checkStateForEmptyArrays(state.kennungen)
        // clearedKennungen = clearedKennungen?.filter(el => el.bezeichnung != action.action.insert.bezeichnung)
        clearedKennungen = [...clearedKennungen!, ...[kennung]]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    on(updateKennungSuccess, (state, action) => {
        let clearedKennungen: Kat[] | undefined = checkStateForEmptyArrays(state.kennungen)
        clearedKennungen = clearedKennungen?.filter(el => el.id != action.update.id)
        clearedKennungen = [...clearedKennungen!, ...[action.update]]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),
    on(deleteKennungSuccess, (state, action) => {
        let clearedKennungen: Kat[] | undefined = checkStateForEmptyArrays(state.kennungen)
        clearedKennungen = clearedKennungen?.filter(el => el.id != action.id)
        clearedKennungen = [...clearedKennungen!]
        return {
            ...state,
            kennungen: clearedKennungen
        }
    }),

    // pruefvermerke
    on(loadedPruefvermerke, (state, action) => {
        return {
            ...state,
            pruefvermerke: action.pruefvermerk
        }
    }),
    on(insertPruefvermerkSuccess, (state, action) => {
        let pruefvermerk: Pruefvermerk = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPruefvermerke: Pruefvermerk[] | undefined = checkStateForEmptyArrays(state.pruefvermerke)
        clearedPruefvermerke = [...clearedPruefvermerke!, ...[pruefvermerk]]
        return {
            ...state,
            pruefvermerke: clearedPruefvermerke
        }
    }),
    on(updatePruefvermerkSuccess, (state, action) => {
        let clearedPruefvermerke: Pruefvermerk[] | undefined = checkStateForEmptyArrays(state.pruefvermerke)
        clearedPruefvermerke = clearedPruefvermerke?.filter(el => el.id != action.update.id)
        clearedPruefvermerke = [...clearedPruefvermerke!, ...[action.update]]
        return {
            ...state,
            pruefvermerke: clearedPruefvermerke
        }
    }),
    on(deletePruefvermerkSuccess, (state, action) => {
        let clearedPruefvermerke: Pruefvermerk[] | undefined = checkStateForEmptyArrays(state.pruefvermerke)
        clearedPruefvermerke = clearedPruefvermerke?.filter(el => el.id != action.id)
        clearedPruefvermerke = [...clearedPruefvermerke!]
        return {
            ...state,
            pruefvermerke: clearedPruefvermerke
        }
    }),

    // pruefvermerkkategorien
    on(loadedPruefvermerkkategorien, (state, action) => {
        return {
            ...state,
            pruefvermerkKategorien: action.kat
        }
    }),
    on(insertPruefvermerkkategorieSuccess, (state, action) => {
        let pruefvermerkkategorie: Kat = Object.assign({}, action.action.insert, { id: action.id })
        let clearedPruefvermerkkategorien: Kat[] | undefined = checkStateForEmptyArrays(state.pruefvermerkKategorien)
        clearedPruefvermerkkategorien = [...clearedPruefvermerkkategorien!, ...[pruefvermerkkategorie]]
        return {
            ...state,
            pruefvermerkKategorien: clearedPruefvermerkkategorien
        }
    }),
    on(updatePruefvermerkkategorieSuccess, (state, action) => {
        let clearedPruefvermerkkategorien: Kat[] | undefined = checkStateForEmptyArrays(state.pruefvermerkKategorien)
        clearedPruefvermerkkategorien = clearedPruefvermerkkategorien?.filter(el => el.id != action.update.id)
        clearedPruefvermerkkategorien = [...clearedPruefvermerkkategorien!, ...[action.update]]
        return {
            ...state,
            pruefvermerkKategorien: clearedPruefvermerkkategorien
        }
    }),
    on(deletePruefvermerkkategorieSuccess, (state, action) => {
        let clearedPruefvermerkkategorien: Kat[] | undefined = checkStateForEmptyArrays(state.pruefvermerkKategorien)
        clearedPruefvermerkkategorien = clearedPruefvermerkkategorien?.filter(el => el.id != action.id)
        clearedPruefvermerkkategorien = [...clearedPruefvermerkkategorien!]
        return {
            ...state,
            pruefvermerkKategorien: clearedPruefvermerkkategorien
        }
    }),

    // schiffe
    on(loadedSchiffe, (state, action) => {
        return {
            ...state,
            schiffe: action.schiffe
        }
    }),
    on(insertSchiffSuccess, (state, action) => {
        let schiff: Schiff = Object.assign({}, action.action.insert, { id: action.id })
        let clearedSchiffe: Schiff[] | undefined = checkStateForEmptyArrays(state.schiffe)
        clearedSchiffe = [...clearedSchiffe!, ...[schiff]]
        return {
            ...state,
            schiffe: clearedSchiffe
        }
    }),
    on(updateSchiffSuccess, (state, action) => {
        let clearedSchiffe: Schiff[] | undefined = checkStateForEmptyArrays(state.schiffe)
        clearedSchiffe = clearedSchiffe?.filter(el => el.id != action.update.id)
        clearedSchiffe = [...clearedSchiffe!, ...[action.update]]
        return {
            ...state,
            schiffe: clearedSchiffe
        }
    }),
    on(deleteSchiffSuccess, (state, action) => {
        let clearedSchiffe: Schiff[] | undefined = checkStateForEmptyArrays(state.schiffe)
        clearedSchiffe = clearedSchiffe?.filter(el => el.id != action.id)
        clearedSchiffe = [...clearedSchiffe!]
        return {
            ...state,
            schiffe: clearedSchiffe
        }
    }),

    // status
    on(loadedAllStatus, (state, action) => {
        return {
            ...state,
            status: action.status
        }
    }),
    on(insertStatusSuccess, (state, action) => {
        let status: Status = Object.assign({}, action.action.insert, { id: action.id })
        let cleared: Status[] | undefined = checkStateForEmptyArrays(state.status)
        cleared = [...cleared!, ...[status]]
        return {
            ...state,
            status: cleared
        }
    }),
    on(updateStatusSuccess, (state, action) => {
        let cleared: Status[] | undefined = checkStateForEmptyArrays(state.status)
        cleared = cleared?.filter(el => el.id != action.update.id)
        cleared = [...cleared!, ...[action.update]]
        return {
            ...state,
            status: cleared
        }
    }),
    on(deleteStatusSuccess, (state, action) => {
        let cleared: Status[] | undefined = checkStateForEmptyArrays(state.status)
        cleared = cleared?.filter(el => el.id != action.id)
        cleared = [...cleared!]
        return {
            ...state,
            status: cleared
        }
    }),

    // zaehlerstandstypen
    on(loadedZaehlerstandstypen, (state, action) => {
        return {
            ...state,
            zaehlerstandstypen: action.kat
        }
    }),
    on(insertZaehlerstandstypSuccess, (state, action) => {
        let zaehlerstandstyp: Zaehlerstandstyp = Object.assign({}, action.action.insert, { id: action.id })
        let clearedZaehlerstandstypen: Zaehlerstandstyp[] | undefined = checkStateForEmptyArrays(state.zaehlerstandstypen)
        clearedZaehlerstandstypen = [...clearedZaehlerstandstypen!, ...[zaehlerstandstyp]]
        return {
            ...state,
            zaehlerstandstypen: clearedZaehlerstandstypen
        }
    }),
    on(updateZaehlerstandstypSuccess, (state, action) => {
        let clearedZaehlerstandstypen: Zaehlerstandstyp[] | undefined = checkStateForEmptyArrays(state.zaehlerstandstypen)
        clearedZaehlerstandstypen = clearedZaehlerstandstypen?.filter(el => el.id != action.update.id)
        clearedZaehlerstandstypen = [...clearedZaehlerstandstypen!, ...[action.update]]
        return {
            ...state,
            zaehlerstandstypen: clearedZaehlerstandstypen
        }
    }),
    on(deleteZaehlerstandstypSuccess, (state, action) => {
        let clearedZaehlerstandstypen: Zaehlerstandstyp[] | undefined = checkStateForEmptyArrays(state.zaehlerstandstypen)
        clearedZaehlerstandstypen = clearedZaehlerstandstypen?.filter(el => el.id != action.id)
        clearedZaehlerstandstypen = [...clearedZaehlerstandstypen!]
        return {
            ...state,
            zaehlerstandstypen: clearedZaehlerstandstypen
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
        let clearedZweck: Kat[] | undefined = checkStateForEmptyArrays(state.zweck)
        clearedZweck = [...clearedZweck!, ...[zweck]]
        return {
            ...state,
            zweck: clearedZweck
        }
    }),
    on(updateZweckSuccess, (state, action) => {
        console.log(action)
        let clearedZweck: Kat[] | undefined = checkStateForEmptyArrays(state.zweck)
        clearedZweck = clearedZweck?.filter(el => el.id != action.update.id)
        clearedZweck = [...clearedZweck!, ...[action.update]]
        return {
            ...state,
            zweck: clearedZweck
        }
    }),
    on(deleteZweckSuccess, (state, action) => {
        console.log(action)
        let clearedZweck: Kat[] | undefined = checkStateForEmptyArrays(state.zweck)
        clearedZweck = clearedZweck?.filter(el => el.id != action.id)
        clearedZweck = [...clearedZweck!]
        return {
            ...state,
            zweck: clearedZweck
        }
    })
)
