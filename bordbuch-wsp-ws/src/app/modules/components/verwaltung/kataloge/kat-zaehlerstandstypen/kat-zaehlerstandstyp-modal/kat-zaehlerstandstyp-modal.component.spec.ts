import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatZaehlerstandstypModalComponent } from './kat-zaehlerstandstyp-modal.component';

describe('KatZaehlerstandstypModalComponent', () => {
  let component: KatZaehlerstandstypModalComponent;
  let fixture: ComponentFixture<KatZaehlerstandstypModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatZaehlerstandstypModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatZaehlerstandstypModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
