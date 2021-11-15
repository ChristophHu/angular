import { Component, Input, OnInit } from '@angular/core'
import { CdkStepper } from '@angular/cdk/stepper'

@Component({
  selector: 'headline-stepper',
  templateUrl: './headline-stepper.component.html',
  styleUrls: ['./headline-stepper.component.sass'],
  providers: [{ provide: CdkStepper, useExisting: HeadlineStepperComponent }]
})
export class HeadlineStepperComponent extends CdkStepper implements OnInit  {
  @Input() status: string | null | undefined
  ngOnInit(): void { }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}