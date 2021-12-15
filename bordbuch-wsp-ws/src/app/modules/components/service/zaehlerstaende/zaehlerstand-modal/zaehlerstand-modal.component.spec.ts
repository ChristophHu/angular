import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaehlerstandModalComponent } from './zaehlerstand-modal.component';

describe('ZaehlerstandModalComponent', () => {
  let component: ZaehlerstandModalComponent;
  let fixture: ComponentFixture<ZaehlerstandModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaehlerstandModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaehlerstandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
