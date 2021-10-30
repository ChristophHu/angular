import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepperHeadlineFormComponent } from './custom-stepper-headline-form.component';

describe('CustomStepperHeadlineFormComponent', () => {
  let component: CustomStepperHeadlineFormComponent;
  let fixture: ComponentFixture<CustomStepperHeadlineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStepperHeadlineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepperHeadlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
