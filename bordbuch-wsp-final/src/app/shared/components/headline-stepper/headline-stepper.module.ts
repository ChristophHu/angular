import { CdkStepperModule } from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeadlineStepperComponent } from "./headline-stepper.component";
import { ProgressComponent } from "./progress/progress.component";
import { StatusComponent } from './status/status.component';

@NgModule({
    declarations: [
        HeadlineStepperComponent,
        ProgressComponent,
        StatusComponent
    ],
    imports: [
        CommonModule,
        CdkStepperModule
    ],
    exports: [
        HeadlineStepperComponent,
        ProgressComponent
    ]
})
export class HeadlineStepperModule { }
