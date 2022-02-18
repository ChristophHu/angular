import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolleComponent } from './kontrolle.component';

describe('KontrolleComponent', () => {
  let component: KontrolleComponent;
  let fixture: ComponentFixture<KontrolleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontrolleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrolleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
