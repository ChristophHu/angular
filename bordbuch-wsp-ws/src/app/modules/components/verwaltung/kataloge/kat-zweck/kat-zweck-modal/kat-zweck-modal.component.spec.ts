import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatZweckModalComponent } from './kat-zweck-modal.component';

describe('KatZweckModalComponent', () => {
  let component: KatZweckModalComponent;
  let fixture: ComponentFixture<KatZweckModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatZweckModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatZweckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
