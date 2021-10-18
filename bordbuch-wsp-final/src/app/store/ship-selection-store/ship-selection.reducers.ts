import { createReducer, on } from "@ngrx/store"
import { allShipLoaded } from "./ship-selection.actions"
import { adapter, initialDataState } from "./ship-selection.adapter"

export const shipSelectionReducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => 
        adapter.addMany(
            action.shipSelection, 
            {...state, 
                isAllDataLoaded: true
            }
        )
    )
)
