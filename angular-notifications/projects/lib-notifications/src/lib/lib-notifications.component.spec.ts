import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNotificationsComponent } from './lib-notifications.component';

describe('LibNotificationsComponent', () => {
  let component: LibNotificationsComponent;
  let fixture: ComponentFixture<LibNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
