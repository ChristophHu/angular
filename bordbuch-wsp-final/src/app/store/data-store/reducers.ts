import { createReducer, on } from "@ngrx/store";
import { allDataLoaded, dataUpdate } from "./actions";
import { adapter, initialDataState } from "./adapter";

export const reducer = createReducer(
    initialDataState,
    on(allDataLoaded, 
        (state, action) => adapter.addMany(
            action.data,
            {...state, isAllDataLoaded: true}
        )
    ),
    on(dataUpdate, (state, action) => 
        adapter.updateOne(action.update, state)
    )
)
