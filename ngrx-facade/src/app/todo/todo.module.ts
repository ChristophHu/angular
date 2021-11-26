import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/todo.effects';
import { TodoResolver } from './store/todo.resolver';
import { TodoService } from './todo.service';
import { reducer } from './store/todo.reducer';
import { RouterModule, Routes } from '@angular/router';
import { TodoFacade } from './todo.facade';

export const routes: Routes = [
  { path: '', component: TodoComponent, resolve: { data: TodoResolver } },
]

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    // allg.
    CommonModule,

    // router
    RouterModule.forChild(routes),

    // store
    StoreModule.forFeature('todo', reducer),
    EffectsModule.forFeature([Effects]),
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    TodoFacade,
    TodoResolver,
    TodoService
  ]
})
export class TodoModule {}
