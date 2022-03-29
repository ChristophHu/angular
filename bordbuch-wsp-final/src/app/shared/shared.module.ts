import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { ModalModule } from './components/modal/modal.module'
import { CardModule } from './components/card/card.module'
import { IconLibraryModule } from 'projects/icon-library/src/public-api'
import { NgSelectModule } from '@ng-select/ng-select'
import { MatSelectModule } from '@angular/material/select'
import { HeadlineStepperModule } from './components/headline-stepper/headline-stepper.module'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'
import { Number2stringPipe } from './pipes/number2string/number2string.pipe'
import { String2numberPipe } from './pipes/string2number/string2number.pipe'
import { DiffDateToTodayPipe } from './pipes/diffDateToToday/diff-date-to-today.pipe'
import { DaysAgoPipe } from './pipes/daysAgo/days-ago.pipe'
import { ToArrayPipe } from './pipes/to-array/to-array.pipe'
import { ImageBase64UploadModule } from './components/image-base64-upload/image-base64-upload.module'
import { ImageSliderComponent } from './components/image-slider/image-slider.component'
import { CarouselItemDirective } from './directives/carousel-item/carousel-item.directive'
import { IvyCarouselModule } from 'projects/image-carousel/src/public-api'
import { InfoPopupModule } from './directives/info-popup/info-popup.module'
import { StickyThingDirective } from './directives/sticky-header/sticky-thing.directive'
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { SliceArrayByPropertyPipe } from './pipes/sliceArrayByProperty/sliceArrayByProperty';
import { ButtonToggleGroupComponent } from './components/button-toggle-group/button-toggle-group.component'

@NgModule({
    declarations: [
        ProgressBarComponent,
        ImageSliderComponent,
        CarouselItemDirective, // check!
        StickyThingDirective,
        Number2stringPipe,
        String2numberPipe,
        DiffDateToTodayPipe,
        DaysAgoPipe,
        ToArrayPipe,
        OrderByPipe,
        SliceArrayByPropertyPipe,
        ButtonToggleGroupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // shared
        ModalModule,
        CardModule,
        ImageBase64UploadModule,

        NgSelectModule,

        // library
        IconLibraryModule,
        IvyCarouselModule,

        // Mat
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatStepperModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,

        InfoPopupModule
    ],
    exports: [
        // directives
        StickyThingDirective,

        // pipes
        DiffDateToTodayPipe,
        DaysAgoPipe,
        ToArrayPipe,
        OrderByPipe,
        SliceArrayByPropertyPipe,
        
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // shared
        ModalModule,
        CardModule,
        HeadlineStepperModule,
        NgSelectModule,
        ImageBase64UploadModule,

        // library
        IconLibraryModule,
        IvyCarouselModule,

        // Mat
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatTableModule,
        MatStepperModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        
        ProgressBarComponent,
        ImageSliderComponent,
        String2numberPipe,
        ButtonToggleGroupComponent,

        InfoPopupModule
    ]
})
export class SharedModule {}
