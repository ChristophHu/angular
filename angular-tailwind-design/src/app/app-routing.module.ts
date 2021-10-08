import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';
import { Role } from './core/models/role';
import { LoginComponent } from './modules/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logged-in', loadChildren: () => import('./modules/components/logged-in/logged-in.module').then( m => m.LoggedInModule ), canActivate: [AuthGuard] },
  { path: 'bootsstreifendienst', loadChildren: () => import('./modules/layouts/admin/admin.module').then( m => m.AdminModule ) },
  { path: 'controlling', loadChildren: () => import('./modules/layouts/admin/admin.module').then( m => m.AdminModule ), canActivate: [AuthGuard], data: { roles: [Role.administration, Role.controlling] } },
  { path: 'admin', loadChildren: () => import('src/app/modules/layouts/admin/admin.module').then( m => m.AdminModule ), canActivate: [AuthGuard], data: { roles: [Role.administration] } },
  { path: 'service', loadChildren: () => import('src/app/modules/layouts/service/service.module').then( m => m.ServiceModule ), canActivate: [AuthGuard], data: { roles: [Role.administration, Role.service] } },
  { path: 'leitung', loadChildren: () => import('src/app/modules/layouts/leitung/leitung.module').then( m => m.LeitungModule ), canActivate: [AuthGuard], data: { roles: [Role.administration, Role.leitung] } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

