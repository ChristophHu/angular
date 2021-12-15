import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchiffModalComponent } from './schiff-modal.component';

describe('SchiffModalComponent', () => {
  let component: SchiffModalComponent;
  let fixture: ComponentFixture<SchiffModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchiffModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchiffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
