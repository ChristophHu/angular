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
import { HeadlineStepperModule } from './components/headline-stepper/headline-stepper.module'

@NgModule({
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
        MatSelectModule
    ],
    declarations: [

    ]
})
export class SharedModule {}
