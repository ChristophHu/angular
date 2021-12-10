import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetankungModalComponent } from './betankung-modal.component';

describe('BetankungModalComponent', () => {
  let component: BetankungModalComponent;
  let fixture: ComponentFixture<BetankungModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetankungModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetankungModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
