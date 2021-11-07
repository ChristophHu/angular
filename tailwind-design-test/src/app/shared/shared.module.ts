import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './components/modal/modal.module';
import { IconsModule } from 'projects/icons/src/lib/icons.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    // lib
    IconsModule,

    // shared
    ModalModule
  ]
})
export class SharedModule { }
