import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetankungenPeilungenComponent } from './betankungen-peilungen.component';

describe('BetankungenPeilungenComponent', () => {
  let component: BetankungenPeilungenComponent;
  let fixture: ComponentFixture<BetankungenPeilungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetankungenPeilungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetankungenPeilungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
