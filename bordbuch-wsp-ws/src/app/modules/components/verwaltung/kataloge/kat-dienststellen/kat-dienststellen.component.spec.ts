import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatDienststellenComponent } from './kat-dienststellen.component';

describe('KatDienststellenComponent', () => {
  let component: KatDienststellenComponent;
  let fixture: ComponentFixture<KatDienststellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatDienststellenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatDienststellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
