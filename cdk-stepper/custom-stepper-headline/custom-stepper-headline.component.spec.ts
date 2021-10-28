import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CustomStepperHeadlineComponent } from './custom-stepper-headline.component';

describe('CustomStepperComponent', () => {
  let component: CustomStepperHeadlineComponent;
  let fixture: ComponentFixture<CustomStepperHeadlineComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStepperHeadlineComponent ]
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepperHeadlineComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});
