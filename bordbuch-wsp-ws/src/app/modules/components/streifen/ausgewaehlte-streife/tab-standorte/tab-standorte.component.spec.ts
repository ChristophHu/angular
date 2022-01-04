import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStandorteComponent } from './tab-standorte.component';

describe('TabStandorteComponent', () => {
  let component: TabStandorteComponent;
  let fixture: ComponentFixture<TabStandorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabStandorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStandorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
