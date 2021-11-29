import { createReducer, on } from "@ngrx/store"
import { Checklistitem } from "src/app/core/model/checklistitem.model"
import { allShipLoaded, pruefvermerkeLoaded, pruefvermerkKategorienLoaded, zaehlerstandstypenLoaded, dienststellenLoaded, loadedChecklistItems, updateChecklistItem } from "./actions"
import { State } from "./state"

export const initialDataState: State = {
    shipSelection: undefined,
    pruefvermerke: undefined,
    pruefvermerkKategorien: undefined,
    zaehlerstandstypen: undefined,
    dienststellen: undefined,
    checklistitems: undefined,
    isAllDataLoaded: false
}

export const reducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => {
        return {
            ...state,
            shipSelection: action.shipSelection
        }
    }),
    on(pruefvermerkeLoaded, (state, action) => {
        return {
            ...state,
            pruefvermerke: action.pruefvermerke
        }
    }),
    on(pruefvermerkKategorienLoaded, (state, action) => {
        return {
            ...state,
            pruefvermerkKategorien: action.pruefvermerkKategorien
        }
    }),
    on(zaehlerstandstypenLoaded, (state, action) => {
        return {
            ...state,
            zaehlerstandstypen: action.zaehlerstandstypen
        }
    }),
    on(dienststellenLoaded, (state, action) => {
        return {
            ...state,
            dienststellen: action.dienststellen
        }
    }),
    on(loadedChecklistItems, (state, action) => {
        return {
            ...state,
            checklistitems: action.items
        }
    }),
    on(updateChecklistItem, (state, action) => {
        let old: Checklistitem[] = state.checklistitems!.filter(el => el.id != action.item.id)
        const clearedChecklistItems = [...old, ...[action.item]]
        return {
            ...state,
            checklistitems: clearedChecklistItems
        }
    })
)
