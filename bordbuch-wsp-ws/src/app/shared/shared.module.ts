import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module'

import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select'
import { MatMenuModule } from '@angular/material/menu'
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
import { RxjsNotificationsModule } from 'projects/rxjs-notifications/src/public-api'
import { ProgressComponent } from './components/progress/progress.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { DiffDateToTodayPipe } from './pipes/diffDateToToday/diff-date-to-today.pipe'
import { InfoPopupModule } from './directives/info-popup/info-popup.module'
import { TooltipModule } from './directives/tooltip/tooltip.module'
import { SliceArrayByPropertyPipe } from './pipes/sliceArrayByProperty/sliceArrayByProperty'
import { OverlapArrayByPropertyPipe } from './pipes/overlapArrayByProperty/overlapArrayByProperty'
import { OrderByPipe } from './pipes/order-by/order-by.pipe'
import { NotificationModule } from 'projects/notification/src/public-api'

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
    ProgressComponent,
    PageNotFoundComponent,
    DiffDateToTodayPipe,
    SliceArrayByPropertyPipe,
    OverlapArrayByPropertyPipe,
    OrderByPipe
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
    NotificationModule,

    // mat
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,

    DataTablesModule,
    InfoPopupModule,
    TooltipModule
  ],
  exports: [
    // components
    ImageSliderComponent,
    ProgressComponent,
    PageNotFoundComponent,

    // directives
    DropdownDirective,
    ClickOutsideDirective,
    IsRoleOfDirective,
    
    // pipes
    SanitizeHtmlPipe,
    TitlecasePipe,
    SliceArrayByPropertyPipe,
    OverlapArrayByPropertyPipe,
    ToArrayPipe,
    DiffDateToTodayPipe,
    OrderByPipe,
    
    CommonModule,
    ModalModule,
    PageHeaderModule,
    ImageBase64UploadModule,
    IconLibraryModule,
    IvyCarouselModule,
    RxjsNotificationsModule,
    NotificationModule,

    // mat
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,

    // forms
    FormsModule,
    ReactiveFormsModule,

    // datatables
    DataTablesModule,
    InfoPopupModule,
    TooltipModule
  ]
})
export class SharedModule { }
