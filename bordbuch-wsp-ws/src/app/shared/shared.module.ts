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
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { TitlecasePipe } from './pipes/titlecase/titlecase.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    ClickOutsideDirective,
    TitlecasePipe
  ],
  imports: [
    CommonModule,

    ModalModule,
    PageHeaderModule,

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
    ReactiveFormsModule,

    DataTablesModule
  ],
  exports: [
    // directives
    DropdownDirective,
    ClickOutsideDirective,
    
    
    CommonModule,

    ModalModule,
    PageHeaderModule,
    
    // icon lib
    IconLibraryModule,

    // mat
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,

    // forms
    FormsModule,
    ReactiveFormsModule,

    // datatables
    DataTablesModule,

    // pipes
    TitlecasePipe
  ]
})
export class SharedModule { }
