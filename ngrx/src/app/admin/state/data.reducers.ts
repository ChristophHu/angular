import { createReducer, on } from "@ngrx/store";
import { DataActions } from "./data.actions-type";
import { adapter, initialDataState } from "./data.adapter";

export const dataReducer = createReducer(
    initialDataState,
    on(DataActions.allDataLoaded, (state, action) => adapter.addMany(action.data, state))
)
