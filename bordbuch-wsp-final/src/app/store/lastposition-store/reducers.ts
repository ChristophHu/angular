import { createReducer, on } from "@ngrx/store";
import { dataLoaded } from "./actions";

import { adapter, initialDataState } from "./adapter";

export const reducer = createReducer(
    initialDataState,
    on(dataLoaded, 
        (state, action) => adapter.addMany(
            action.lastPositions,
            {...state, isAllDataLoaded: true}
        )
    )
)
