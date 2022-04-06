import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlarmeldungenComponent } from './klarmeldungen.component';

describe('KlarmeldungenComponent', () => {
  let component: KlarmeldungenComponent;
  let fixture: ComponentFixture<KlarmeldungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlarmeldungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlarmeldungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
