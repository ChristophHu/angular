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

export const selectDatyById = (id: any) => createSelector(
    selectAllData,
    data => data.find(el => el.id == id)
)

// export const selectDataByID = (props: {id: any}) => createSelector(
//     selectAllData,
//     entities => {
//         return entities[props.id];
//     }
// )


// export const selectPicture = createSelector(
//     selectAllData,
//     data => data.filter(el => el.type == 'picture')
// )

// export const selectData = createSelector(
//     selectAllData,
//     data => data.filter(el => el.type == 'data')
// )

// export const selectDataCount = createSelector(
//     selectData,
//     data => data.length
// )