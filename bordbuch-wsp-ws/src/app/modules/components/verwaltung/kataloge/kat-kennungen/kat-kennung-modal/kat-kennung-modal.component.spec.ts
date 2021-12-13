import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatKennungModalComponent } from './kat-kennung-modal.component';

describe('KatKennungModalComponent', () => {
  let component: KatKennungModalComponent;
  let fixture: ComponentFixture<KatKennungModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatKennungModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatKennungModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
