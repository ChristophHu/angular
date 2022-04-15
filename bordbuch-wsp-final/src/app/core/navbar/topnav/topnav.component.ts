import { Component } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/modules/auth/state/actions';
import { Animations } from 'src/app/shared/animations';
import { RootStoreState } from 'src/app/store/root-store.state';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { Ship } from '../../model/ship.model';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass'],
  animations   : Animations
})
export class TopnavComponent {
  status: boolean = false
  ship$: Observable<Ship>

  sidebarHandler() {
    this.status = !this.status
  }

  constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade) {
    this.ship$ = this._specFacade.getShip()
  }

  auswahl() {
    this.resetStore()
    this.status = !this.status
  }
  boot() {
    this.status = !this.status
  }
  resetStore() {
    this._specFacade.resetStore()
  }

  logout() {
    this.resetStore()
    this.store.dispatch(logout())
  }

}
