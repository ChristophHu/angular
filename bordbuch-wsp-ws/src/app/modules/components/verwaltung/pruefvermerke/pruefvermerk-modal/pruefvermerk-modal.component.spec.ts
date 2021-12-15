import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefvermerkModalComponent } from './pruefvermerk-modal.component';

describe('PruefvermerkModalComponent', () => {
  let component: PruefvermerkModalComponent;
  let fixture: ComponentFixture<PruefvermerkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefvermerkModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefvermerkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
