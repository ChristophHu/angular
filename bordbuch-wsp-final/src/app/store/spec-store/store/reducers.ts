import { createReducer, on } from "@ngrx/store"
import { Unklar } from "src/app/core/model/unklar.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"
import { checkStateForEmptyArrays } from "src/app/shared/utils"
import { insertUnklarSuccess, loadedAllZaehlerstaende, loadUnklarByIdSchiffSuccess, updateUnklarSuccess, updateZaehlerstandSuccess } from "./actions"

export interface State {
    unklar          : Unklar            | undefined
    zaehlerstaende  : Zaehlerstand[]    | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    unklar          : undefined,
    zaehlerstaende  : undefined,
    isAllDataLoaded : false
}

export const reducer = createReducer(
    initialDataState,

    // unklar
    on(loadUnklarByIdSchiffSuccess, (state, action) => {
        return {
            ...state,
            unklar: action.unklar
        }
    }),
    on(insertUnklarSuccess, (state, action) => {
        const insert: Unklar = Object.assign({}, action.action.insert, {id: action.id})
        return {
            ...state,
            unklar: insert
        }
    }),
    on(updateUnklarSuccess, (state, action) => {
        return {
            ...state,
            unklar: action.update
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
