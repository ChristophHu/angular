import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/authentication/auth.guard';


import { LoggedInComponent } from './logged-in.component';

const routes: Routes = [
  { path: '', component: LoggedInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
