import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartungenComponent } from './wartungen.component';

describe('WartungenComponent', () => {
  let component: WartungenComponent;
  let fixture: ComponentFixture<WartungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WartungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WartungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
