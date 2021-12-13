import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklisteModalComponent } from './checkliste-modal.component';

describe('ChecklisteModalComponent', () => {
  let component: ChecklisteModalComponent;
  let fixture: ComponentFixture<ChecklisteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklisteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklisteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
