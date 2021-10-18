import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { logout } from '../../auth/state/actions';
import { Ship } from '../../../core/model/ship.model';

import { AppService } from '../../../core/services/app.service';
import { selectAllShip } from './state/ship.selectors';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
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
  // schiffe: Observable<Ship[]>
  // schiffeSubscription!: Subscription
  
  bordbuchForm: FormGroup
  
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private modalService: ModalService<QrscannerComponent>) {
    this.bordbuchForm = this.formBuilder.group({
      bordbuch: []
    })

    this.allShips$ = this.store.pipe(select(selectAllShip))
  }

  // get f() {
	// 	return this.bordbuchForm.controls
	// }

  // ngOnInit(): void {
  //   this.schiffeSubscription = this.schiffe.subscribe((data: Schiff[]) => { })
  //   this.appService.getSchiffe()
  // }

  // ngOnDestroy(): void {
  //   this.schiffeSubscription.unsubscribe()
  // }

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
