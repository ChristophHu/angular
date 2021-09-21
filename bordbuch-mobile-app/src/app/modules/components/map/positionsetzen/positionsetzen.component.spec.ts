import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsetzenComponent } from './positionsetzen.component';

describe('PositionsetzenComponent', () => {
  let component: PositionsetzenComponent;
  let fixture: ComponentFixture<PositionsetzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsetzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsetzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
