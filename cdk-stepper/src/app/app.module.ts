import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomStepperComponent
  ],
  imports: [
    BrowserModule,
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
