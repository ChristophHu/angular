import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetankungenComponent } from './betankungen.component';

describe('BetankungenComponent', () => {
  let component: BetankungenComponent;
  let fixture: ComponentFixture<BetankungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetankungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetankungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
