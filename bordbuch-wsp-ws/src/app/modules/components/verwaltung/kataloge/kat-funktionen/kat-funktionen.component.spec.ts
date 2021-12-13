import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatFunktionenComponent } from './kat-funktionen.component';

describe('KatFunktionenComponent', () => {
  let component: KatFunktionenComponent;
  let fixture: ComponentFixture<KatFunktionenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatFunktionenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatFunktionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
