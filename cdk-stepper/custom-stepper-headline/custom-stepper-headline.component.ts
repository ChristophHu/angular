import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: 'custom-stepper',
  templateUrl: './custom-stepper-headline.component.html',
  styleUrls: ['./custom-stepper-headline.component.sass'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperHeadlineComponent }]
})
export class CustomStepperHeadlineComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
