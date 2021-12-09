import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';

import { MatInputModule } from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select';
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule,

    // mat
    // MatInputModule,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatTableModule,
    // MatStepperModule,
    // MatSelectModule
  ],
  exports: [
    DropdownDirective,

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
