import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/modules/auth/state/actions';
import { RootStoreState } from 'src/app/store/root-store.state';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.sass']
})
export class PositionsComponent implements OnInit {

  constructor(private store: Store<RootStoreState>) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logout())
  }
}
