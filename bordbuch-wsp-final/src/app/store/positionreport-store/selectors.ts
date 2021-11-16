import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { DataState, selectAll } from "./adapter";

export const selectDataState = createFeatureSelector<DataState>(Features.Positionreport)

// export const isDataLoaded = createSelector(
//     selectDataState,
//     // state => state.isAllDataLoaded
// )

export const selectAllData = createSelector(
    selectDataState,
    selectAll
)
export const selectDataByPatrol = (id_streife: string) => createSelector(
    selectAllData,
    data => data.filter(el => el.id_streife == id_streife)
)

export const selectDataById = (id: any) => createSelector(
    selectAllData,
    data => data.find(el => el.id == id)
)

// export const selectData = createSelector(
//     selectAllData,
//     data => data.filter(el => el.type == 'data')
// )

// export const selectDataCount = createSelector(
//     selectData,
//     data => data.length
// )