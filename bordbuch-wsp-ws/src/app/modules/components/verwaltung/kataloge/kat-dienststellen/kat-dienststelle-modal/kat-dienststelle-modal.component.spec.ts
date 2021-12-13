import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatDienststelleModalComponent } from './kat-dienststelle-modal.component';

describe('KatDienststelleModalComponent', () => {
  let component: KatDienststelleModalComponent;
  let fixture: ComponentFixture<KatDienststelleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatDienststelleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatDienststelleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
