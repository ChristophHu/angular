import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { ShipState, selectAll } from "./ship-selection.adapter";

export const selectShipState = createFeatureSelector<ShipState>(Features.ShipSelection)

export const isDataLoaded = createSelector(
    selectShipState,
    state => state.isAllDataLoaded
)

export const selectAllShip = createSelector(
    selectShipState,
    selectAll
)