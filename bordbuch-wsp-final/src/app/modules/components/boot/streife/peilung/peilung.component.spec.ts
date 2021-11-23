import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeilungComponent } from './peilung.component';

describe('PeilungComponent', () => {
  let component: PeilungComponent;
  let fixture: ComponentFixture<PeilungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeilungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeilungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
