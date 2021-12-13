import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatBetriebsstoffeModalComponent } from './kat-betriebsstoffe-modal.component';

describe('KatBetriebsstoffeModalComponent', () => {
  let component: KatBetriebsstoffeModalComponent;
  let fixture: ComponentFixture<KatBetriebsstoffeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatBetriebsstoffeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatBetriebsstoffeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
