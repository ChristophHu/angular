import { Component } from '@angular/core'
import { CdkStepper } from '@angular/cdk/stepper'

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.sass'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent}]
})
export class CustomStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
