import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/core/model/ship.model';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store/';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'wartung',
  templateUrl: './wartung.component.html',
  styleUrls: ['./wartung.component.sass']
})
export class WartungComponent {

  ship$: Observable<Ship | undefined>
  zaehlerstaende$: Observable<Zaehlerstand[]>

  today: Date = new Date()
  yesterday = new Date().setDate(new Date().getDate() - 1);
  
  constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade) {
    this.ship$ = this.store.pipe(select(ShipSelectors.selectShip))
    this.zaehlerstaende$ = this._specFacade.allZaehlerstaende$
  }
}
