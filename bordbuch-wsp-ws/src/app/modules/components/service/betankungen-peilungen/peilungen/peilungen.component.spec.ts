import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeilungenComponent } from './peilungen.component';

describe('PeilungenComponent', () => {
  let component: PeilungenComponent;
  let fixture: ComponentFixture<PeilungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeilungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeilungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
