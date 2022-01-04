import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartungSchiffeComponent } from './wartung-schiffe.component';

describe('WartungSchiffeComponent', () => {
  let component: WartungSchiffeComponent;
  let fixture: ComponentFixture<WartungSchiffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WartungSchiffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WartungSchiffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
