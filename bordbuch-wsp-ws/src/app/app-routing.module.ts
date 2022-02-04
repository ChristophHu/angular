import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './modules/auth/auth.guard'
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('./modules/layouts/ws/ws.module').then( m => m.WsModule ), canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
