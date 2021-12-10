import { NgModule } from '@angular/core';
import { VerticalNavComponent } from './vertical-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    VerticalNavComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    VerticalNavComponent
  ]
})
export class VerticalNavModule { }
