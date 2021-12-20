import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreifenComponent } from './streifen.component';

describe('StreifenComponent', () => {
  let component: StreifenComponent;
  let fixture: ComponentFixture<StreifenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreifenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreifenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
