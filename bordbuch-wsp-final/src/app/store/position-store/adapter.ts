import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Position } from "src/app/core/model/position";

export interface PositionsState extends EntityState<Position> {
    positions: Position[]
    isAllDataLoaded: boolean
}

export const adapter = createEntityAdapter<Position>();

export const initialState = adapter.getInitialState({
    isAllDataLoaded: false
})

export const { selectAll } = adapter.getSelectors()