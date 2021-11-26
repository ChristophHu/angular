import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RootStoreModule } from './store/root-store.module';
import { TodoModule } from './todo/todo.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./todo/todo.module').then(module => module.TodoModule) },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RootStoreModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
