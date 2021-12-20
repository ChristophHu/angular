import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuellePositionenComponent } from './aktuelle-positionen.component';

describe('AktuellePositionenComponent', () => {
  let component: AktuellePositionenComponent;
  let fixture: ComponentFixture<AktuellePositionenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktuellePositionenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktuellePositionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
