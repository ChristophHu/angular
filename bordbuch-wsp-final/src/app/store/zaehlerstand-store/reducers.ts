import { createReducer, on } from "@ngrx/store";
import { ZaehlerstandAction } from ".";
import { adapter, initialDataState } from "./adapter";

export const reducer = createReducer(
    initialDataState,
    on(ZaehlerstandAction.allDataLoaded, 
        (state, action) => adapter.addMany(
            action.zaehlerstand,
            {...state, isAllDataLoaded: true}
        )
    ),
    on(ZaehlerstandAction.dataUpdate, (state, action) => 
        adapter.updateOne(action.update, state)
    ),
    on(ZaehlerstandAction.resetStore, (store, action) => 
        initialDataState
    )
)
