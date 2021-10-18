import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { RootStoreState } from 'src/app/store/root-store.state';
import { logout } from '../../auth/state/actions';
import { Ship } from '../../../core/model/ship.model';

import { AppService } from '../../../core/services/app.service';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { ShipSelectionSelectors } from 'src/app/store/ship-selection-store';
// import { AuthService } from 'src/app/core/authentication/auth.service';
// import { Schiff } from 'src/app/core/models/schiff';
// import { AppService } from 'src/app/core/services/app.service';
// import { ModalService } from 'src/app/shared/components/modal/modal.service';
// import { QrscannerComponent } from './qrscanner/qrscanner.component';

@Component({
  selector: 'app-bordbuch-auswahl',
  templateUrl: './bordbuch-auswahl.component.html',
  styleUrls: ['./bordbuch-auswahl.component.sass']
})
export class BordbuchAuswahlComponent {

  allShips$!: Observable<Ship[]>
  
  bordbuchForm: FormGroup
  
  constructor(private formBuilder: FormBuilder, private store: Store<RootStoreState>, private modalService: ModalService<QrscannerComponent>) {
    this.bordbuchForm = this.formBuilder.group({
      bordbuch: []
    })

    this.allShips$ = this.store.pipe(select(ShipSelectionSelectors.selectAllShip))
  }

  async showModal(): Promise<void> {
    const { QrscannerComponent } = await import('./qrscanner/qrscanner.component')
    this.modalService.open(QrscannerComponent, {
      data: {
        // id: id
      }
    })
  }

  logout() {
    this.store.dispatch(logout())
  }
}
