import { createReducer, on } from "@ngrx/store"
import { pruefvermerkeLoaded, zaehlerstandstypenLoaded } from "./actions"
import { State } from "./state"

export const initialDataState: State = {
    pruefvermerke: undefined,
    Zaehlerstandstypen: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            pruefvermerke: action.pruefvermerke, Zaehlerstandstypen: state.Zaehlerstandstypen, isAllDataLoaded: false
        }
    }),
    on(zaehlerstandstypenLoaded, (state, action) => {
        return {
            pruefvermerke: state.pruefvermerke, Zaehlerstandstypen: action.zaehlerstandstypen, isAllDataLoaded: false
        }
    })
)
