import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatKennungenComponent } from './kat-kennungen.component';

describe('KatKennungenComponent', () => {
  let component: KatKennungenComponent;
  let fixture: ComponentFixture<KatKennungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatKennungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatKennungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
