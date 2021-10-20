import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { compareData, Data } from "./data.model";

export interface DataState extends EntityState<Data> {
    isAllDataLoaded: boolean
}

export const adapter = createEntityAdapter<Data>({
    sortComparer: compareData,
    // selectId: data => data.id    
});

export const initialDataState = adapter.getInitialState({
    isAllDataLoaded: false
})

export const { selectAll } = adapter.getSelectors()