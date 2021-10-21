import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from './state'


export const katState = createFeatureSelector<State>(Features.Kat)

// ship
export const isKatLoaded = createSelector(
    katState,
    state => state.isAllDataLoaded
)

export const selectShips = createSelector(
    katState,
    state => state.shipSelection
)

export const selectpruefvermerke = createSelector(
    katState,
    state => state.pruefvermerke
)
