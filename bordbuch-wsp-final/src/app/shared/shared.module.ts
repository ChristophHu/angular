import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { ModalModule } from './components/modal/modal.module';
import { CardModule } from './components/card/card.module';
import { IconLibraryModule } from 'projects/icon-library/src/public-api';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // shared
        ModalModule,
        CardModule,

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

        // library
        IconLibraryModule,

        // Mat
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatStepperModule,
    ],
    declarations: [
      
    ]
})
export class SharedModule {}
