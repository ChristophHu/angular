import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartungSchiffModalComponent } from './wartung-schiff-modal.component';

describe('ZaehlerstandModalComponent', () => {
  let component: WartungSchiffModalComponent;
  let fixture: ComponentFixture<WartungSchiffModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WartungSchiffModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WartungSchiffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
