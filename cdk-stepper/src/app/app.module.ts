import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleStepperComponent } from './simple-stepper/simple-stepper.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { ProgressComponent } from './custom-stepper/progress/progress.component';
import { CustomStepperHeadlineComponent } from './custom-stepper-headline/custom-stepper-headline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomStepperHeadlineFormComponent } from './custom-stepper-headline-form/custom-stepper-headline-form.component';
import { FirstFormComponent } from './complex-forms/first-form/first-form.component';
import { SecondFormComponent } from './complex-forms/second-form/second-form.component';
import { ThirdFormComponent } from './complex-forms/third-form/third-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleStepperComponent,
    CustomStepperComponent,
    ProgressComponent,
    CustomStepperHeadlineComponent,
    CustomStepperHeadlineFormComponent,
    FirstFormComponent,
    SecondFormComponent,
    ThirdFormComponent
  ],
  imports: [
    BrowserModule,
    CdkStepperModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
