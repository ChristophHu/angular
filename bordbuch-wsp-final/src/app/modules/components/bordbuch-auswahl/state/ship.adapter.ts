import { createEntityAdapter, EntityState } from "@ngrx/entity"
import { Ship } from "../model/ship.model"


export interface ShipState extends EntityState<Ship> {
    // simple
    // data: Data[]

    // simple entity without extends EntityState<Data>
    // entities: {[key: number]: Data},
    // ids: number[]
}

export const adapter = createEntityAdapter<Ship>()

export const initialDataState = adapter.getInitialState()

export const { selectAll } = adapter.getSelectors()