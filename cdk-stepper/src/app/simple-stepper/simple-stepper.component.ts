import { Component } from '@angular/core'
import { CdkStepper } from '@angular/cdk/stepper'

@Component({
  selector: 'simple-stepper',
  templateUrl: './simple-stepper.component.html',
  styleUrls: ['./simple-stepper.component.sass'],
  providers: [{ provide: CdkStepper, useExisting: SimpleStepperComponent}]
})
export class SimpleStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
