import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Patrol } from 'src/app/core/model/patrol.model';
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

  patrol!: Patrol

  zweckFormGroup: FormGroup
  
  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder) {
    this.isPatrolActive$ = this.store.pipe(select(ShipSelectors.isPatrolActive))
    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe(patrol => {
      console.log(patrol)
      this.patrol = patrol!
    })

    this.zweckFormGroup = this._formBuilder.group({
      kennung   : [this.patrol.identifier, Validators.required],
      zweck     : [this.patrol.purpose, Validators.required]
    });
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
