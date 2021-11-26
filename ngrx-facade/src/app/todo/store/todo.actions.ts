import { createAction, props } from "@ngrx/store";

export const loadTodo = createAction(
	"[Todo API] Load Todos"
)
export const loadTodoSuccess = createAction(
	"[Todo API] Todo Loaded Success",
	props<{ value: any }>()
)
export const loadTodoFailure = createAction(
	'[Todo API] Todo Loaded Failure', 
	props<{ errorMessage: string }>(),
)