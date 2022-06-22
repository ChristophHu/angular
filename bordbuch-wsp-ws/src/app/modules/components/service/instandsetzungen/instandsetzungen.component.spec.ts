import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstandsetzungenComponent } from './instandsetzungen.component';

describe('InstandsetzungenComponent', () => {
  let component: InstandsetzungenComponent;
  let fixture: ComponentFixture<InstandsetzungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstandsetzungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstandsetzungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
