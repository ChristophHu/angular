import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankModalComponent } from './tank-modal.component';

describe('TankModalComponent', () => {
  let component: TankModalComponent;
  let fixture: ComponentFixture<TankModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
