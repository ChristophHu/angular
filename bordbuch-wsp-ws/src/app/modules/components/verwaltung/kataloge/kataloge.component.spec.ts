import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogeComponent } from './kataloge.component';

describe('KatalogeComponent', () => {
  let component: KatalogeComponent;
  let fixture: ComponentFixture<KatalogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatalogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatalogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
