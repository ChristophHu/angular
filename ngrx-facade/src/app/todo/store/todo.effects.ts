import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../todo.service";
import { loadTodo, loadTodoSuccess, loadTodoFailure } from "./todo.actions";
import { catchError, concatMap, map, switchMap } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable()
export class Effects {
    constructor(private actions$: Actions, private todoService: TodoService ) {}
    
    loadTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadTodo),
            switchMap(() => {
                return this.todoService.getTodo().pipe(
                    map(value => loadTodoSuccess({ value: value })),
                    catchError(error => of(loadTodoFailure({ errorMessage: error })))
                )
            })
        )
    })
}