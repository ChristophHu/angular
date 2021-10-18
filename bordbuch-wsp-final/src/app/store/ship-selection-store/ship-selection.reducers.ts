import { createReducer, on } from "@ngrx/store";
import { allShipLoaded } from "./ship-selection.actions";
import { adapter, initialDataState } from "./ship-selection.adapter";

export const shipReducer = createReducer(
    initialDataState,
    on(allShipLoaded, (state, action) => 
        adapter.addMany(
            action.ship, 
            {...state, 
                isAllDataLoaded: true
            }
        )
    )
)
