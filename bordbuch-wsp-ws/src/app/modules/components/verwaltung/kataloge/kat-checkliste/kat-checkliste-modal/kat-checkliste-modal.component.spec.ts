import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatChecklisteModalComponent } from './kat-checkliste-modal.component';

describe('KatChecklisteModalComponent', () => {
  let component: KatChecklisteModalComponent;
  let fixture: ComponentFixture<KatChecklisteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatChecklisteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatChecklisteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
