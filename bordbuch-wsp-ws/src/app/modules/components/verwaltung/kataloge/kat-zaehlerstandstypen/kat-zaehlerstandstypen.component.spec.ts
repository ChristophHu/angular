import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatZaehlerstandstypenComponent } from './kat-zaehlerstandstypen.component';

describe('KatZaehlerstandstypenComponent', () => {
  let component: KatZaehlerstandstypenComponent;
  let fixture: ComponentFixture<KatZaehlerstandstypenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatZaehlerstandstypenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatZaehlerstandstypenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
