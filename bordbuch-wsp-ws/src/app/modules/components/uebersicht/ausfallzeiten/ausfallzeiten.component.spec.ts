import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusfallzeitenComponent } from './ausfallzeiten.component';

describe('AusfallzeitenComponent', () => {
  let component: AusfallzeitenComponent;
  let fixture: ComponentFixture<AusfallzeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusfallzeitenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusfallzeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
