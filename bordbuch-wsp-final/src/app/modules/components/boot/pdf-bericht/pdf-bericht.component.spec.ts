import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfBerichtComponent } from './pdf-bericht.component';

describe('PdfBerichtComponent', () => {
  let component: PdfBerichtComponent;
  let fixture: ComponentFixture<PdfBerichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfBerichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfBerichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
