import { createReducer, on } from "@ngrx/store"
import { allShipLoaded, pruefvermerkeLoaded, pruefvermerkKategorienLoaded, zaehlerstandstypenLoaded, dienststellenLoaded } from "./actions"
import { State } from "./state"

export const initialDataState: State = {
    shipSelection: undefined,
    pruefvermerke: undefined,
    pruefvermerkKategorien: undefined,
    zaehlerstandstypen: undefined,
    dienststellen: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => {
        return {
            shipSelection: action.shipSelection, pruefvermerke: state.pruefvermerke, pruefvermerkKategorien: state.pruefvermerkKategorien, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: action.pruefvermerke, pruefvermerkKategorien: state.pruefvermerkKategorien, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(pruefvermerkKategorienLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: state.pruefvermerke, pruefvermerkKategorien: action.pruefvermerkKategorien, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(zaehlerstandstypenLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: state.pruefvermerke, pruefvermerkKategorien: state.pruefvermerkKategorien, zaehlerstandstypen: action.zaehlerstandstypen, dienststellen: state.dienststellen, isAllDataLoaded: false
        }
    }),
    on(dienststellenLoaded, (state, action) => {
        return {
            shipSelection: state.shipSelection, pruefvermerke: state.pruefvermerke, pruefvermerkKategorien: state.pruefvermerkKategorien, zaehlerstandstypen: state.zaehlerstandstypen, dienststellen: action.dienststellen, isAllDataLoaded: false
        }
    })
)
