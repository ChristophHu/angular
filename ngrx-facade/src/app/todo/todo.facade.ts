import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { loadTodo } from "./store/todo.actions";
import { TodoState } from "./store/todo.reducer";
import { selectTodo } from "./store/todo.selectors";

@Injectable()
export class TodoFacade {
    todos$ = this.store.pipe(select(selectTodo))

    constructor(private store: Store<TodoState>) {}

    loadTodo() {
        this.store.dispatch(loadTodo())
    }
}