import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { logout } from 'src/app/modules/auth/state/actions';
import { Animations } from 'src/app/shared/animations';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass'],
  animations   : Animations
})
export class TopnavComponent {
  status: boolean = false
  id: Observable<string | undefined> = EMPTY

  sidebarHandler() {
    this.id = this.store.pipe(select(ShipSelectors.selectShipId))
    this.status = !this.status
  }

  constructor(private store: Store<RootStoreState>) { }

  resetStore() {
    this.store.dispatch(ShipAction.resetStore())
  }

  logout() {
    this.store.dispatch(logout())
  }

}
