import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav.component';
import { IconsModule } from 'projects/icons/src/lib/icons.module';

@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    TopnavComponent
  ]
})
export class TopnavModule { }
