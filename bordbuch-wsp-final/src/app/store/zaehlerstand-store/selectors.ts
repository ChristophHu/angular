import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { DataState, selectAll } from "./adapter";

export const selectDataState = createFeatureSelector<DataState>(Features.Zaehlerstand)

export const isDataLoaded = createSelector(
    selectDataState,
    state => state.isAllDataLoaded
)

export const selectAllData = createSelector(
    selectDataState,
    selectAll
)

export const selectDataById = (id: any) => createSelector(
    selectAllData,
    data => data.find(el => el.id == id)
)