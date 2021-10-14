import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/components/login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
