import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { DataState, selectAll } from "./adapter";

export const selectDataState = createFeatureSelector<DataState>(Features.Positionreport)

export const isDataLoaded = createSelector(
    selectDataState,
    state => state.isAllDataLoaded
)

export const selectAllData = createSelector(
    selectDataState,
    selectAll
)

export const selectPositionOfStreife = createSelector(
    selectAllData,
    data => data.filter(el => el.id_streife == '97fb0b3e-612a-4746-aeae-ef57ac893e5d')
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