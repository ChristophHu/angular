import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartungMotorModalComponent } from './wartung-motor-modal.component';

describe('ZaehlerstandModalComponent', () => {
  let component: WartungMotorModalComponent;
  let fixture: ComponentFixture<WartungMotorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WartungMotorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WartungMotorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
