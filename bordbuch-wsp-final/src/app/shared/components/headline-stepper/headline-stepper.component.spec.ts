import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineStepperComponent } from './headline-stepper.component';

describe('HeadlineStepperComponent', () => {
  let component: HeadlineStepperComponent;
  let fixture: ComponentFixture<HeadlineStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
