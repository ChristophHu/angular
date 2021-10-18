import { createReducer, on } from "@ngrx/store"
import { shipLoaded } from "./ship.actions"
import { adapter, initialDataState } from "./ship.adapter"

export const shipReducer = createReducer(
    initialDataState,
    on(shipLoaded, (state, action) => 
        adapter.addMany(
            action.ship, 
            {...state, 
                isAllDataLoaded: true
            }
        )
    )
)
