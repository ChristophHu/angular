import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { compareData, Data } from "../model/data.model";

export interface DataState extends EntityState<Data> {
    // simple
    // data: Data[]

    // simple entity without extends EntityState<Data>
    // entities: {[key: number]: Data},
    // ids: number[]
}

export const adapter = createEntityAdapter<Data>({
    sortComparer: compareData,
    // selectId: data => data.id    
});

export const initialDataState = adapter.getInitialState()

export const { selectAll } = adapter.getSelectors()