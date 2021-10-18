import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/core/model/ship.model';
import { RootStoreState } from 'src/app/store';
import { ShipSelectors } from 'src/app/store/ship-store';
import { logout } from '../../auth/state/actions';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.sass']
})
export class BootComponent implements OnInit {

  isPatrolActive$!: Observable<boolean>

  constructor(private store: Store<RootStoreState>) {
    this.isPatrolActive$ = this.store.pipe(select(ShipSelectors.isPatrolActive))
  }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      console.log(ship)
    })
  }

  startPatrol() {
    
  }

  logout() {
    this.store.dispatch(logout())
  }

}
