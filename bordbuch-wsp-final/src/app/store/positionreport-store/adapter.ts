import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { PositionReport } from "src/app/core/model/positionreport.model";

export interface DataState extends EntityState<PositionReport> {

}

export const adapter = createEntityAdapter<PositionReport>({
    selectId: data => data.id!
});

export const initialDataState = adapter.getInitialState({

})

export const { selectIds, selectAll } = adapter.getSelectors()