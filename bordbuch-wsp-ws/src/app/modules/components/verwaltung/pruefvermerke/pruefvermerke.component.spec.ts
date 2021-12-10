import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefvermerkeComponent } from './pruefvermerke.component';

describe('PruefvermerkeComponent', () => {
  let component: PruefvermerkeComponent;
  let fixture: ComponentFixture<PruefvermerkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefvermerkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefvermerkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
