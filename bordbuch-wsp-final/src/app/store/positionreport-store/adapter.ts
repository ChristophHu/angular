import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { PositionReport } from "src/app/core/model/positionreport.model";

export interface DataState extends EntityState<PositionReport> {
    isAllDataLoaded: boolean
}

export const adapter = createEntityAdapter<PositionReport>({
    // sortComparer: compareData,
    // selectId: data => data.id    
});

export const initialDataState = adapter.getInitialState({
    isAllDataLoaded: false
})

export const { selectAll } = adapter.getSelectors()