import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstandsetzungModalComponent } from './instandsetzung-modal.component';

describe('InstandsetzungModalComponent', () => {
  let component: InstandsetzungModalComponent;
  let fixture: ComponentFixture<InstandsetzungModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstandsetzungModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstandsetzungModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
