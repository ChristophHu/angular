import { Data } from "../model/data.model";
import { createEntityAdapter, EntityState } from '@ngrx/entity'
import { createReducer, on } from "@ngrx/store";
import { DataActions } from "./data.actions-type";

export interface DataState extends EntityState<Data> {
    // simple
    // data: Data[]

    // simple entity without extends EntityState<Data>
    // entities: {[key: number]: Data},
    // ids: number[]
}

export const adapter = createEntityAdapter<Data>();

export const initialDataState = adapter.getInitialState()

export const dataReducer = createReducer(
    initialDataState,
    on(DataActions.allDataLoaded, (state, action) => adapter.addMany(action.data, state))
)