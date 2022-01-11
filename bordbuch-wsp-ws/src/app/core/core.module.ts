import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavComponent } from './sidebar/vertical-nav/vertical-nav.component';

@NgModule({
  declarations: [
    VerticalNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerticalNavComponent
  ]
})
export class CoreModule { }
