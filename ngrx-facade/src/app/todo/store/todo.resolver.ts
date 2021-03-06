import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { loadTodo } from "./todo.actions";
import { TodoState } from "./todo.reducer";

@Injectable()
export class TodoResolver implements Resolve<any> {
    loading = false

    constructor(private store: Store<TodoState>) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this.store.dispatch(loadTodo())
                }
            }),
            first(),
            finalize(() => this.loading = false)
        )
    }
}