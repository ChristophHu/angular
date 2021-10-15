import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataState, selectAll } from "./data.adapter";

export const selectDataState = createFeatureSelector<DataState>('data')

export const isDataLoaded = createSelector(
    selectDataState,
    state => state.isAllDataLoaded
)

export const selectAllData = createSelector(
    selectDataState,
    selectAll
)

export const selectPicture = createSelector(
    selectAllData,
    data => data.filter(el => el.type == 'picture')
)

export const selectData = createSelector(
    selectAllData,
    data => data.filter(el => el.type == 'data')
)

export const selectDataCount = createSelector(
    selectData,
    data => data.length
)