import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from './state'


export const PositionsState = createFeatureSelector<State>(Features.Positions)

// ship
export const isPositionsLoaded = createSelector(
    PositionsState,
    state => state.isAllDataLoaded
)

// export const selectpruefvermerke = createSelector(
//     PositionState,
//     state => state.pruefvermerke
// )
