import { Component, OnInit } from '@angular/core';
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
  schiff: any[] = [
    { id: '1', date: '29.11.2022' }
  ]
  motor: any[] = [
    { id: '1', bezeichnung: 'MOTOR1', betriebsstunden: '50:00' }
  ]

  wartung_schiff: any[] = [
    { id: '1', id_schiff: '1', date: '29.11.2022' }
  ]
  wartung_motor: any[] = [
    { id: '1', id_motor: '1', date: '29.11.2022' }
  ]
  
  constructor(private store: Store<RootStoreState>) {
    this.ship$ = this.store.pipe(select(ShipSelectors.selectShip))
    this.zaehlerstaende$ = this.store.pipe(select(ZaehlerstandSelectors.selectAllData))
    console.log('funkt')
  }

  ngOnInit(): void {

  }
}
