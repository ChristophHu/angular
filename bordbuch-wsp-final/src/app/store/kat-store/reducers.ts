import { createReducer, on } from "@ngrx/store"
import { allShipLoaded, pruefvermerkeLoaded, zaehlerstandstypenLoaded } from "./actions"
import { State } from "./state"

export const initialDataState: State = {
    shipSelection: undefined,
    pruefvermerke: undefined,
    Zaehlerstandstypen: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => {
        return {
            shipSelection: action.shipSelection, pruefvermerke: state.pruefvermerke, Zaehlerstandstypen: state.Zaehlerstandstypen, isAllDataLoaded: false
        }
    }),
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: action.pruefvermerke, Zaehlerstandstypen: state.Zaehlerstandstypen, isAllDataLoaded: false
        }
    }),
    on(zaehlerstandstypenLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: state.pruefvermerke, Zaehlerstandstypen: action.zaehlerstandstypen, isAllDataLoaded: false
        }
    })
)
