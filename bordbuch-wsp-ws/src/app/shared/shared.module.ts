import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module'

import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select'
import { DropdownDirective } from './directives/dropdown/dropdown.directive'
import { ModalModule } from './components/modal/modal.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive'
import { DataTablesModule } from 'angular-datatables'
import { PageHeaderModule } from './components/page-header/page-header.module'
import { TitlecasePipe } from './pipes/titlecase/titlecase.pipe'
import { IsRoleOfDirective } from './directives/is-role-of/is-role-of.directive'
import { ImageBase64UploadModule } from './components/image-base64-upload/image-base64-upload.module'
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitize-html.pipe'
import { ImageSliderComponent } from './components/image-slider/image-slider.component'
import { CarouselItemDirective } from './directives/carousel-item.directive'
import { IvyCarouselModule } from 'image-carousel'
import { ToArrayPipe } from './pipes/to-array/to-array.pipe'
import { BarChartVerticalComponent } from './components/charts/bar-chart-vertical/bar-chart-vertical.component'
import { RxjsNotificationsModule } from 'projects/rxjs-notifications/src/public-api'

@NgModule({
  declarations: [
    DropdownDirective,
    ClickOutsideDirective,
    IsRoleOfDirective,
    TitlecasePipe,
    SanitizeHtmlPipe,
    ImageSliderComponent,
    CarouselItemDirective,
    ToArrayPipe,
    BarChartVerticalComponent
  ],
  imports: [
    CommonModule,

    ModalModule,
    PageHeaderModule,
    ImageBase64UploadModule,
    RxjsNotificationsModule,

    // icon lib
    IconLibraryModule,
    IvyCarouselModule,

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
    BarChartVerticalComponent,

    // directives
    DropdownDirective,
    ClickOutsideDirective,
    IsRoleOfDirective,
    
    // pipes
    SanitizeHtmlPipe,
    TitlecasePipe,
    ToArrayPipe,

    CommonModule,
    ModalModule,
    PageHeaderModule,
    ImageBase64UploadModule,
    IconLibraryModule,
    IvyCarouselModule,
    RxjsNotificationsModule,

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
