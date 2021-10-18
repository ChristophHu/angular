import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from './ship.state'


export const selectShipState = createFeatureSelector<State>(Features.Ship)

// ship
export const isShipLoaded = createSelector(
    selectShipState,
    state => state.isAllDataLoaded
)

export const selectedShip = createSelector(
    selectShipState,
    state => state.ship
)

// patrol
export const isPatrolActive = createSelector(
    selectShipState,
    state => state.patrol?.purpose == 'active'
)

export const selectedPatrol = createSelector(
    selectShipState,
    state => state.patrol
)