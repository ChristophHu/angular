import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/modules/auth/state/actions';
import { RootStoreState } from 'src/app/store/root-store.state';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  constructor(private store: Store<RootStoreState>) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logout())
  }

}
