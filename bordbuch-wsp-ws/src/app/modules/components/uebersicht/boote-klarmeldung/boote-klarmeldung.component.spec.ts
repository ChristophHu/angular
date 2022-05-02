import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooteKlarmeldungComponent } from './boote-klarmeldung.component';

describe('BooteKlarmeldungComponent', () => {
  let component: BooteKlarmeldungComponent;
  let fixture: ComponentFixture<BooteKlarmeldungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooteKlarmeldungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooteKlarmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
