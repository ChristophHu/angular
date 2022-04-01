import { Component, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipSelectors, ShipState } from 'src/app/store/ship-store';
import { BesatzungModalComponent } from './besatzung-modal/besatzung-modal.component';

@Component({
  selector: 'app-besatzung',
  templateUrl: './besatzung.component.html',
  styleUrls: ['./besatzung.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BesatzungComponent {

  id_streife!: string
  besatzung$: Observable<Besatzung[]>

  constructor(private store: Store<ShipState.State>, private modalService: ModalService<BesatzungModalComponent>) {
    this.besatzung$ = this.store.pipe(select(ShipSelectors.selectBesatzung)) as Observable<Besatzung[]>
    this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) this.id_streife = id_streife
    })
  }

  async openBesatzungModal(besatzung?: Besatzung) {
    const { BesatzungModalComponent } = await import(
      './besatzung-modal/besatzung-modal.component'
    )

    if (besatzung) {
      this.modalService.open(BesatzungModalComponent, {
        data: {
          title: 'Besatzungsmitglied bearbeiten',
          besatzung
        }
      })
    } else {
      this.modalService.open(BesatzungModalComponent, {
        data: {
          title: 'Besatzungsmitglied hinzufügen',
          besatzung: { id_streife: this.id_streife, persnr: '', funktion: '', an_bord: '', von_bord: ''}
        }
      })
    }
  }
}
