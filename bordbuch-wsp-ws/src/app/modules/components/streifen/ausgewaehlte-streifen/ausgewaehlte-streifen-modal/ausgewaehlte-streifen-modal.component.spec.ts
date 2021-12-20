import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgewaehlteStreifenModalComponent } from './ausgewaehlte-streifen-modal.component';

describe('AusgewaehlteStreifenModalComponent', () => {
  let component: AusgewaehlteStreifenModalComponent;
  let fixture: ComponentFixture<AusgewaehlteStreifenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusgewaehlteStreifenModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgewaehlteStreifenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
