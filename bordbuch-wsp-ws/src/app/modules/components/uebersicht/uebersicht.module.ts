import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { UebersichtComponent } from './uebersicht.component';

const routes: Routes = [
  { path: '', component: UebersichtComponent }
]
@NgModule({
  declarations: [
    UebersichtComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgChartsModule,
    SharedModule
  ]
})
export class UebersichtModule { }
