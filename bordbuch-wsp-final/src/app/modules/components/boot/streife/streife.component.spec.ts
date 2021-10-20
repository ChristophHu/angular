import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreifeComponent } from './streife.component';

describe('StreifeComponent', () => {
  let component: StreifeComponent;
  let fixture: ComponentFixture<StreifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
