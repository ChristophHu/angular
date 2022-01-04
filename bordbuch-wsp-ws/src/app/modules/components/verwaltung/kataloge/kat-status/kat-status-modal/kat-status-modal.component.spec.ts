import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatStatusModalComponent } from './kat-status-modal.component';

describe('KatStatusModalComponent', () => {
  let component: KatStatusModalComponent;
  let fixture: ComponentFixture<KatStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatStatusModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
