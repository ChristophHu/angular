import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatFunktionModalComponent } from './kat-funktion-modal.component';

describe('KatFunktionModalComponent', () => {
  let component: KatFunktionModalComponent;
  let fixture: ComponentFixture<KatFunktionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatFunktionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatFunktionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
