import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'mobile', loadChildren: () => import('./modules/layouts/mobile/mobile.module').then(m => m.MobileModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
