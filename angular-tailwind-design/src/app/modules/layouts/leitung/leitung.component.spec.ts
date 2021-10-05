import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitungComponent } from './leitung.component';

describe('LeitungComponent', () => {
  let component: LeitungComponent;
  let fixture: ComponentFixture<LeitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
