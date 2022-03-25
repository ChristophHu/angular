import { Component, OnInit } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY } from '@angular/material/tooltip';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/core/model/ship.model';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store/';
import { ZaehlerstandSelectors } from 'src/app/store/zaehlerstand-store';

@Component({
  selector: 'wartung',
  templateUrl: './wartung.component.html',
  styleUrls: ['./wartung.component.sass']
})
export class WartungComponent implements OnInit {

  ship$: Observable<Ship | undefined>
  zaehlerstaende$: Observable<Zaehlerstand[]>

  today: Date = new Date()
  yesterday = new Date().setDate(new Date().getDate() - 1);
  
  constructor(private store: Store<RootStoreState>) {
    this.ship$ = this.store.pipe(select(ShipSelectors.selectShip))
    this.zaehlerstaende$ = this.store.pipe(select(ZaehlerstandSelectors.selectAllData))
    this.store.pipe(select(ZaehlerstandSelectors.selectAllData)).subscribe(data => console.log(data))
  }

  ngOnInit(): void {

  }
}
