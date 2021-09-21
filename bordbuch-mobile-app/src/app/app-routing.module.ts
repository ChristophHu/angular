import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BordbuchAuswahlComponent } from './modules/components/bordbuch-auswahl/bordbuch-auswahl.component';
import { LoginComponent } from './modules/components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auswahl', component: BordbuchAuswahlComponent },
  { path: 'mobile', loadChildren: () => import('./modules/layouts/mobile-layout/mobile-layout.module').then( m => m.MobileLayoutModule ) },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
