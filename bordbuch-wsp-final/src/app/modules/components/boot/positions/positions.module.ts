import { NgModule } from '@angular/core';
import { PositionsComponent } from './positions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  { path: '', component: PositionsComponent }
]

@NgModule({
  declarations: [
    PositionsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PositionsModule { }
