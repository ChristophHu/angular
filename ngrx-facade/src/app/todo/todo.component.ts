import { Component, OnInit } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { TodoState } from './store/todo.reducer';
// import { selectTodo } from './store/todo.selectors';
import { TodoFacade } from './todo.facade'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent {

  // todos$!: Observable<any>

  // constructor(private store: Store<TodoState>) {
  //   this.todos$ = this.store.pipe(select(selectTodo))
  // }

  todos$ = this.todoFacade.todos$

  constructor(private todoFacade: TodoFacade) {}
}
