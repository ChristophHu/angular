import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { ShipSelectionState, selectAll } from "./ship-selection.adapter";

export const selectShipState = createFeatureSelector<ShipSelectionState>(Features.ShipSelection)

export const isDataLoaded = createSelector(
    selectShipState,
    state => state.isAllDataLoaded
)

export const selectAllShip = createSelector(
    selectShipState,
    selectAll
)