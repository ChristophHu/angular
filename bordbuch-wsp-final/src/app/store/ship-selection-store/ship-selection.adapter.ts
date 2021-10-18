import { createEntityAdapter, EntityState } from "@ngrx/entity"
import { ShipSelection } from "src/app/core/model/ship-selection.model"

export interface ShipState extends EntityState<ShipSelection> {
    isAllDataLoaded: boolean
}

export const adapter = createEntityAdapter<ShipSelection>()

export const initialDataState = adapter.getInitialState({
    isAllDataLoaded: false
})

export const { selectAll } = adapter.getSelectors()