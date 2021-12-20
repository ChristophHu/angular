import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgewaehlteStreifenComponent } from './ausgewaehlte-streifen.component';

describe('AusgewaehlteStreifenComponent', () => {
  let component: AusgewaehlteStreifenComponent;
  let fixture: ComponentFixture<AusgewaehlteStreifenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusgewaehlteStreifenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgewaehlteStreifenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
