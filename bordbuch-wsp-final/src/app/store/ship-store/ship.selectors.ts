import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from './ship.state'


export const selectShipState = createFeatureSelector<State>(Features.Ship)

// export const isShipLoaded = createSelector(
//     selectShipState,
//     state => state.isAllDataLoaded
// )

// export const selectShip = createSelector(
//     selectShipState,
//     selectAll
// )

export const isShipLoaded = createSelector(
    selectShipState,
    state => state.isAllDataLoaded
)

export const selectedShip = createSelector(
    selectShipState,
    state => state.ship
)