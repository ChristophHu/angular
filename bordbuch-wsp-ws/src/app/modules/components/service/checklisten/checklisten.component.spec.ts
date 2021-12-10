import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistenComponent } from './checklisten.component';

describe('ChecklistenComponent', () => {
  let component: ChecklistenComponent;
  let fixture: ComponentFixture<ChecklistenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
