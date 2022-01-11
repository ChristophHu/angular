import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { ModalModule } from './components/modal/modal.module'
import { CardModule } from './components/card/card.module'
import { IconLibraryModule } from 'projects/icon-library/src/public-api'
import { NgSelectModule } from '@ng-select/ng-select'
import { MatSelectModule } from '@angular/material/select';
import { HeadlineStepperComponent } from './components/headline-stepper/headline-stepper.component'
import { HeadlineStepperModule } from './components/headline-stepper/headline-stepper.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { Number2stringPipe } from './pipes/number2string/number2string.pipe';
import { String2numberPipe } from './pipes/string2number/string2number.pipe';
import { DiffDateToTodayPipe } from './pipes/diffDateToToday/diff-date-to-today.pipe';
import { DaysAgoPipe } from './pipes/daysAgo/days-ago.pipe'

@NgModule({
    declarations: [
        ProgressBarComponent,
        Number2stringPipe,
        String2numberPipe,
        DiffDateToTodayPipe,
        DaysAgoPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // shared
        ModalModule,
        CardModule,

        NgSelectModule,

        // library
        IconLibraryModule,

        // Mat
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatStepperModule,
    ],
    exports: [
        // pipes
        DiffDateToTodayPipe,
        DaysAgoPipe,
        
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // shared
        ModalModule,
        CardModule,
        HeadlineStepperModule,
        NgSelectModule,

        // library
        IconLibraryModule,

        // Mat
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatTableModule,
        MatStepperModule,
        MatSelectModule,

        ProgressBarComponent,
        String2numberPipe
    ]
})
export class SharedModule {}
