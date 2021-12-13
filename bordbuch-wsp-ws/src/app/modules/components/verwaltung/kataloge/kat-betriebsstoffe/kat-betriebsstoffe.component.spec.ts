import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatBetriebsstoffeComponent } from './kat-betriebsstoffe.component';

describe('KatBetriebsstoffeComponent', () => {
  let component: KatBetriebsstoffeComponent;
  let fixture: ComponentFixture<KatBetriebsstoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatBetriebsstoffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatBetriebsstoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
