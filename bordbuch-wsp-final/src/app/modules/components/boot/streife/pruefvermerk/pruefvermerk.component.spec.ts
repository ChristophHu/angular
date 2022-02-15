import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefvermerkComponent } from './pruefvermerk.component';

describe('PruefvermerkComponent', () => {
  let component: PruefvermerkComponent;
  let fixture: ComponentFixture<PruefvermerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefvermerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefvermerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
