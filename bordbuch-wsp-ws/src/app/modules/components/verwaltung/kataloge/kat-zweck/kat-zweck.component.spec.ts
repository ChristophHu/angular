import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatZweckComponent } from './kat-zweck.component';

describe('KatZweckComponent', () => {
  let component: KatZweckComponent;
  let fixture: ComponentFixture<KatZweckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatZweckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatZweckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
