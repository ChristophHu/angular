import { createReducer, on } from "@ngrx/store";
import { allShipLoaded } from "./ship.actions";
import { adapter, initialDataState } from "./ship.adapter";

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
