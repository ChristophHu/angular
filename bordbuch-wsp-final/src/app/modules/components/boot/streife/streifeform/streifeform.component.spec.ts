import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreifeformComponent } from './streifeform.component';

describe('StreifeformComponent', () => {
  let component: StreifeformComponent;
  let fixture: ComponentFixture<StreifeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreifeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreifeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
