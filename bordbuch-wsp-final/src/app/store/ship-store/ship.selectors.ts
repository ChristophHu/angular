import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { ShipState, selectAll } from "./ship.adapter";

export const selectShipState = createFeatureSelector<ShipState>(Features.Ship)

export const isDataLoaded = createSelector(
    selectShipState,
    state => state.isAllDataLoaded
)

export const selectShip = createSelector(
    selectShipState,
    selectAll
)