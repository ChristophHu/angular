import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlarmeldungModalComponent } from './klarmeldung-modal.component';

describe('KlarmeldungModalComponent', () => {
  let component: KlarmeldungModalComponent;
  let fixture: ComponentFixture<KlarmeldungModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlarmeldungModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlarmeldungModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
