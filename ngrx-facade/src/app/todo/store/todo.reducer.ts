import { createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { loadTodoSuccess } from "./todo.actions";

export interface TodoState extends EntityState<any> {}

export const adapter = createEntityAdapter<any>({
    selectId: data => data.id!
});

export const initialDataState = adapter.getInitialState({})

export const { selectIds, selectAll } = adapter.getSelectors()

export const reducer = createReducer(
    initialDataState,
    on(loadTodoSuccess, (state, action) => {
        return adapter.addOne(action.value, state)
    }),
)