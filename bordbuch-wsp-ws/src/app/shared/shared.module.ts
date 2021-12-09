import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module';

import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    // icon lib
    IconLibraryModule,

    // mat
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule
  ],
  exports: [
    // icon lib
    IconLibraryModule,

    // mat
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule
  ]
})
export class SharedModule { }
