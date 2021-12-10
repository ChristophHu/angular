import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparaturenComponent } from './reparaturen.component';

describe('ReparaturenComponent', () => {
  let component: ReparaturenComponent;
  let fixture: ComponentFixture<ReparaturenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparaturenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparaturenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
