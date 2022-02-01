import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { logout } from 'src/app/modules/auth/state/actions';
import { Animations } from 'src/app/shared/animations';
import { PositionActions } from 'src/app/store/positionreport-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';
import { ZaehlerstandAction } from 'src/app/store/zaehlerstand-store';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass'],
  animations   : Animations
})
export class TopnavComponent {
  status: boolean = false
  id$: Observable<string | undefined> = EMPTY
  name$: Observable<string | undefined> = EMPTY

  sidebarHandler() {
    this.status = !this.status
  }

  constructor(private store: Store<RootStoreState>) {
    this.id$ = this.store.pipe(select(ShipSelectors.selectShipId))
    this.store.pipe(select(ShipSelectors.selectShipId)).subscribe(id => console.log(id))
    this.name$ = this.store.pipe(select(ShipSelectors.selectShipName))
  }

  auswahl() {
    this.resetStore()
    this.status = !this.status
  }
  boot() {
    this.status = !this.status
  }
  resetStore() {
    this.store.dispatch(ShipAction.resetStore())
    this.store.dispatch(PositionActions.resetStore())
    this.store.dispatch(ZaehlerstandAction.resetStore())
  }

  logout() {
    this.resetStore()
    this.store.dispatch(logout())
  }

}
