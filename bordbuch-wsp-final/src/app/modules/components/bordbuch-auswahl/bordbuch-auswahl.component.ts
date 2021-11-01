import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreState } from 'src/app/store/root-store.state';
import { logout } from '../../auth/state/actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { ShipSelectionSelectors } from 'src/app/store/ship-selection-store';
import { ShipSelection } from 'src/app/core/model/ship-selection.model';
import { KatSelectors } from 'src/app/store/kat-store';
import { Dienststelle } from 'src/app/core/model/dienststelle.model';

@Component({
  selector: 'app-bordbuch-auswahl',
  templateUrl: './bordbuch-auswahl.component.html',
  styleUrls: ['./bordbuch-auswahl.component.sass']
})
export class BordbuchAuswahlComponent {

  allShips$!: Observable<ShipSelection[]>
  dienststellen$!: Observable<Dienststelle[]>
  ships$!: Observable<ShipSelection[] | undefined>

  selectedIdShip!: string
  
  bordbuchForm: FormGroup
  
  constructor(private formBuilder: FormBuilder, private store: Store<RootStoreState>, private modalService: ModalService<QrscannerComponent>) {
    this.bordbuchForm = this.formBuilder.group({
      bordbuch: []
    })

    this.allShips$ = this.store.pipe(select(ShipSelectionSelectors.selectAllShip)) as Observable<ShipSelection[]>
    this.dienststellen$ = this.store.pipe(select(KatSelectors.selectDienststellen)) as Observable<Dienststelle[]>
  }

  selectDienststelle(dienststelle: string) {
    this.ships$ = this.store.pipe(select(KatSelectors.selectShipByDienststelle(dienststelle))) as Observable<ShipSelection[] | undefined>
  }

  selectSchiff(id_ship: string) {
    this.selectedIdShip = id_ship
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
