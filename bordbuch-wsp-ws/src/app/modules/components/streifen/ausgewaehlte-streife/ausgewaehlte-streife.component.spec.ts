import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgewaehlteStreifeComponent } from './ausgewaehlte-streife.component';

describe('AusgewaehlteStreifeComponent', () => {
  let component: AusgewaehlteStreifeComponent;
  let fixture: ComponentFixture<AusgewaehlteStreifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusgewaehlteStreifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgewaehlteStreifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
