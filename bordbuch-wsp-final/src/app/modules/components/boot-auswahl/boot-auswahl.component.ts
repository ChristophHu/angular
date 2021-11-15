import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dienststelle } from 'src/app/core/model/dienststelle.model';
import { ShipSelection } from 'src/app/core/model/ship-selection.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectionSelectors } from 'src/app/store/ship-selection-store';
import { logout } from '../../auth/state/actions';
import { QrscannerComponent } from './qrscanner/qrscanner.component';

@Component({
  selector: 'app-boot-auswahl',
  templateUrl: './boot-auswahl.component.html',
  styleUrls: ['./boot-auswahl.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BootAuswahlComponent {

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
    const { QrscannerComponent } = await import('../boot-auswahl/qrscanner/qrscanner.component')
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
