import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgewaehlterStandortModalComponent } from './ausgewaehlter-standort-modal.component';

describe('AusgewaehlteStreifeModalComponent', () => {
  let component: AusgewaehlterStandortModalComponent;
  let fixture: ComponentFixture<AusgewaehlterStandortModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusgewaehlterStandortModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgewaehlterStandortModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
