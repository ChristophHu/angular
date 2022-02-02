import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorModalComponent } from './motor-modal.component';

describe('MotorModalComponent', () => {
  let component: MotorModalComponent;
  let fixture: ComponentFixture<MotorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
