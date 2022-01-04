import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatStatusComponent } from './kat-status.component';

describe('KatStatusComponent', () => {
  let component: KatStatusComponent;
  let fixture: ComponentFixture<KatStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
