import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesatzungModalComponent } from './besatzung-modal.component';

describe('BesatzungModalComponent', () => {
  let component: BesatzungModalComponent;
  let fixture: ComponentFixture<BesatzungModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesatzungModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BesatzungModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
