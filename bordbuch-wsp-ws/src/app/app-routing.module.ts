import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WsComponent } from './modules/layouts/ws/ws.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/layouts/ws/ws.module').then( m => m.WsModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
