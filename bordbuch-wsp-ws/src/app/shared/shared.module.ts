import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module';

import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { ModalModule } from './components/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule,

    ModalModule,

    // icon lib
    IconLibraryModule,

    // mat
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownDirective,
    
    CommonModule,

    ModalModule,
    
    // icon lib
    IconLibraryModule,

    // mat
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
