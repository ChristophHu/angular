import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaehlerstaendeComponent } from './zaehlerstaende.component';

describe('ZaehlerstaendeComponent', () => {
  let component: ZaehlerstaendeComponent;
  let fixture: ComponentFixture<ZaehlerstaendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaehlerstaendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaehlerstaendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
