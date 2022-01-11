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
import { IsRoleOfDirective } from './directives/is-role-of/is-role-of.directive';
import { ImageBase64UploadModule } from './components/image-base64-upload/image-base64-upload.module';
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitize-html.pipe';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    DropdownDirective,
    ClickOutsideDirective,
    IsRoleOfDirective,
    TitlecasePipe,
    SanitizeHtmlPipe,
    ImageSliderComponent,
    CarouselItemDirective,
    CarouselComponent
  ],
  imports: [
    CommonModule,

    ModalModule,
    PageHeaderModule,
    ImageBase64UploadModule,

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
    // components
    ImageSliderComponent,

    // directives
    DropdownDirective,
    ClickOutsideDirective,
    IsRoleOfDirective,
    
    // pipes
    SanitizeHtmlPipe,
    TitlecasePipe,

    CommonModule,
    ModalModule,
    PageHeaderModule,
    ImageBase64UploadModule,
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
    DataTablesModule
  ]
})
export class SharedModule { }
