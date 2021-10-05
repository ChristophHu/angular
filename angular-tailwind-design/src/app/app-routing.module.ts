import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';
import { LoginComponent } from './modules/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logged-in', loadChildren: () => import('./modules/components/logged-in/logged-in.module').then( m => m.LoggedInModule ), canActivate: [AuthGuard] },
  { path: 'bootsstreifendienst', loadChildren: () => import('./modules/layouts/admin/admin.module').then( m => m.AdminModule ) },
  { path: 'controlling', loadChildren: () => import('./modules/layouts/admin/admin.module').then( m => m.AdminModule ) },
  { path: 'admin', loadChildren: () => import('src/app/modules/layouts/admin/admin.module').then( m => m.AdminModule ) },
  { path: 'service', loadChildren: () => import('src/app/modules/layouts/service/service.module').then( m => m.ServiceModule ) },
  { path: 'leitung', loadChildren: () => import('src/app/modules/layouts/leitung/leitung.module').then( m => m.LeitungModule ) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

