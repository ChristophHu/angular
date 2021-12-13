import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatPruefvermerkkategorieModalComponent } from './kat-pruefvermerkkategorie-modal.component';

describe('KatPruefvermerkkategorieModalComponent', () => {
  let component: KatPruefvermerkkategorieModalComponent;
  let fixture: ComponentFixture<KatPruefvermerkkategorieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatPruefvermerkkategorieModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatPruefvermerkkategorieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
