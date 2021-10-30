import { Component } from '@angular/core'
import { CdkStepper } from '@angular/cdk/stepper'

@Component({
  selector: 'custom-stepper-headline-form',
  templateUrl: './custom-stepper-headline-form.component.html',
  styleUrls: ['./custom-stepper-headline-form.component.sass'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperHeadlineFormComponent }]
})
export class CustomStepperHeadlineFormComponent extends CdkStepper {

  print() {
    return this.steps.map(step => {
      return {
        completed: step.completed,
        hasError: step.hasError,
        editable: step.editable,
        label: step.label,
        interacted: step.interacted
      }
    })
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
