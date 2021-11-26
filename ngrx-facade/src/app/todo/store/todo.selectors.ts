import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, TodoState } from "./todo.reducer";

export const selectTodoState = createFeatureSelector<TodoState>('todo')

export const selectTodo = createSelector(
    selectTodoState,
    selectAll
)
