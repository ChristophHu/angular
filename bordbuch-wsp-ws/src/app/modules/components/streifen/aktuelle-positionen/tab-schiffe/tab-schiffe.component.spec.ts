import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSchiffeComponent } from './tab-schiffe.component';

describe('TabSchiffeComponent', () => {
  let component: TabSchiffeComponent;
  let fixture: ComponentFixture<TabSchiffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSchiffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSchiffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
