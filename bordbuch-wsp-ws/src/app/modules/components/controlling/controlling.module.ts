import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ControllingComponent } from './controlling.component';

const routes: Routes = [
  { path: '', component: ControllingComponent }
];

@NgModule({
  declarations: [
    ControllingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    
    SharedModule
  ]
})
export class ControllingModule { }
