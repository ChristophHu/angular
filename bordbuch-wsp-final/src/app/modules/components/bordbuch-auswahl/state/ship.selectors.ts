import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShipState, selectAll } from "./ship.adapter";


export const selectShipState = createFeatureSelector<ShipState>('ship')

export const selectAllShip = createSelector(
    selectShipState,
    selectAll
)