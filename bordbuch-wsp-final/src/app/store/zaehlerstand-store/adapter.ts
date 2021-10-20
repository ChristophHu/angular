import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";

export interface DataState extends EntityState<Zaehlerstand> {
    isAllDataLoaded: boolean
}

export const adapter = createEntityAdapter<Zaehlerstand>({
    // sortComparer: compareData,
    // selectIds: data => data.id    
});

export const initialDataState = adapter.getInitialState({
    isAllDataLoaded: false
})

export const { selectAll } = adapter.getSelectors()