import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNavbarComponent } from './simple-navbar.component';

describe('SimpleNavbarComponent', () => {
  let component: SimpleNavbarComponent;
  let fixture: ComponentFixture<SimpleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
