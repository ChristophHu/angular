import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwaltungVonSchiffenComponent } from './verwaltung-von-schiffen.component';

describe('VerwaltungVonSchiffenComponent', () => {
  let component: VerwaltungVonSchiffenComponent;
  let fixture: ComponentFixture<VerwaltungVonSchiffenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerwaltungVonSchiffenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwaltungVonSchiffenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
