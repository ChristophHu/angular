import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-stepper-headline',
  templateUrl: './custom-stepper-headline.component.html',
  styleUrls: ['./custom-stepper-headline.component.sass'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperHeadlineComponent }]
})
export class CustomStepperHeadlineComponent extends CdkStepper implements OnInit {
  @Input() activeClass = 'active';
  ngOnInit(): void {
    console.log(this.linear)
  }

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
