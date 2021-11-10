import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootAuswahlComponent } from './boot-auswahl.component';

describe('BootAuswahlComponent', () => {
  let component: BootAuswahlComponent;
  let fixture: ComponentFixture<BootAuswahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootAuswahlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootAuswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
