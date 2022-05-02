import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DienststellenKlarmeldungComponent } from './dienststellen-klarmeldung.component';

describe('DienststellenKlarmeldungComponent', () => {
  let component: DienststellenKlarmeldungComponent;
  let fixture: ComponentFixture<DienststellenKlarmeldungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DienststellenKlarmeldungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DienststellenKlarmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
