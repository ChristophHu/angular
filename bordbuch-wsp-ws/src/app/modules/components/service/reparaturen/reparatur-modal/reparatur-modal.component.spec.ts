import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparaturModalComponent } from './reparatur-modal.component';

describe('ReparaturModalComponent', () => {
  let component: ReparaturModalComponent;
  let fixture: ComponentFixture<ReparaturModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparaturModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparaturModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
