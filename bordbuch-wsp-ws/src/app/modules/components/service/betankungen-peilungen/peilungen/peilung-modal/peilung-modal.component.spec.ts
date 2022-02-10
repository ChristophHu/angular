import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeilungModalComponent } from './peilung-modal.component';

describe('BetankungModalComponent', () => {
  let component: PeilungModalComponent;
  let fixture: ComponentFixture<PeilungModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeilungModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeilungModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
