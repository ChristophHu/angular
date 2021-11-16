import { createReducer, on } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { PositionActions } from ".";
import { allDataLoaded } from "./actions";
import { adapter, initialDataState } from "./adapter";

export const reducer = createReducer(
    initialDataState,
    on(allDataLoaded, 
        (state, action) => adapter.addMany(
            action.positionReport,
            {...state, isAllDataLoaded: true}
        )
    ),
    // on(PositionActions.insertData, (state, action) => 
    //     adapter.addOne(action.positionReport, state)
    // ),
    on(PositionActions.insertDataSuccess, (state, action) => {
        return adapter.addOne(action.positionReport, state)
    }),
    on(PositionActions.updateData, (state, action) => 
        adapter.updateOne(action.update, state)
    ),
    on(PositionActions.deleteData, (state, action) => 
        adapter.removeOne(action.id, state)
    )
)
