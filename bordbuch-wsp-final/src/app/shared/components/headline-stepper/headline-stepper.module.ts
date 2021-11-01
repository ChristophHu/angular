import { CdkStepperModule } from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeadlineStepperComponent } from "./headline-stepper.component";
import { ProgressComponent } from "./progress/progress.component";

@NgModule({
    declarations: [
        HeadlineStepperComponent,
        ProgressComponent
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
