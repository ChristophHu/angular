import { createReducer, on } from "@ngrx/store"
import { Klarmeldung } from "src/app/core/model/klarmeldung.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"
import { checkStateForEmptyArrays } from "src/app/shared/utils"
import { insertKlarmeldungSuccess, loadedAllZaehlerstaende, loadKlarmeldungByIdSchiffSuccess, updateKlarmeldungSuccess, updateZaehlerstandSuccess } from "./actions"

export interface State {
    klarmeldung     : Klarmeldung       | undefined
    zaehlerstaende  : Zaehlerstand[]    | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    klarmeldung          : undefined,
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
