import { createEntityAdapter, EntityState } from "@ngrx/entity"
import { Ship } from "../../../../core/model/ship.model"

export interface ShipState extends EntityState<Ship> {
    isAllDataLoaded: boolean
}

export const adapter = createEntityAdapter<Ship>()

export const initialDataState = adapter.getInitialState({
    isAllDataLoaded: false
})

export const { selectAll } = adapter.getSelectors()