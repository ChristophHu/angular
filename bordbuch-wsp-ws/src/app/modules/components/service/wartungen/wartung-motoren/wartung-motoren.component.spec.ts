import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartungMotorenComponent } from './wartung-motoren.component';

describe('WartungMotorenComponent', () => {
  let component: WartungMotorenComponent;
  let fixture: ComponentFixture<WartungMotorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WartungMotorenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WartungMotorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
