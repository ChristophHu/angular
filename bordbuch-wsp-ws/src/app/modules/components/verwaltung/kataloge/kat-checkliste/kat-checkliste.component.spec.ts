import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatChecklisteComponent } from './kat-checkliste.component';

describe('KatChecklisteComponent', () => {
  let component: KatChecklisteComponent;
  let fixture: ComponentFixture<KatChecklisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatChecklisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatChecklisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
