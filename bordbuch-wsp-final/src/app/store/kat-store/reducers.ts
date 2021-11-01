import { createReducer, on } from "@ngrx/store"
import { allShipLoaded, pruefvermerkeLoaded, zaehlerstandstypenLoaded, dienststellenLoaded } from "./actions"
import { State } from "./state"

export const initialDataState: State = {
    shipSelection: undefined,
    pruefvermerke: undefined,
    zaehlerstandstypen: undefined,
    dienststellen: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => {
        return {
            shipSelection: action.shipSelection, pruefvermerke: state.pruefvermerke, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: action.pruefvermerke, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(zaehlerstandstypenLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: state.pruefvermerke, zaehlerstandstypen: action.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(dienststellenLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: state.pruefvermerke, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: action.dienststellen, isAllDataLoaded: false
        }
    })
)
