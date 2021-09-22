import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankzettelComponent } from './tankzettel.component';

describe('TankzettelComponent', () => {
  let component: TankzettelComponent;
  let fixture: ComponentFixture<TankzettelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankzettelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankzettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
