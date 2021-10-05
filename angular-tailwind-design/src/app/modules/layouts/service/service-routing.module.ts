import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from 'src/app/core/models/role';
import { BetankungenComponent } from '../../components/betankungen/betankungen.component';
import { ReparaturenServiceComponent } from '../../components/reparaturen-service/reparaturen-service.component';
import { ServiceComponent } from './service.component';

const routes: Routes = [
  { path: '', component: ServiceComponent,
    children: [
      { path: 'service', component: ReparaturenServiceComponent },
      { path: 'betankungen', component: BetankungenComponent },
      { path: '**', redirectTo: 'service'}
    ], data: { roles: [Role.service] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
