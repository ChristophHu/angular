import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatPruefvermerkkategorienComponent } from './kat-pruefvermerkkategorien.component';

describe('KatPruefvermerkkategorienComponent', () => {
  let component: KatPruefvermerkkategorienComponent;
  let fixture: ComponentFixture<KatPruefvermerkkategorienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatPruefvermerkkategorienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatPruefvermerkkategorienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
