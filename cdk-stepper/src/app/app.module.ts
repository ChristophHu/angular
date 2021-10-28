import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleStepperComponent } from './simple-stepper/simple-stepper.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { ProgressComponent } from './custom-stepper/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleStepperComponent,
    CustomStepperComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
