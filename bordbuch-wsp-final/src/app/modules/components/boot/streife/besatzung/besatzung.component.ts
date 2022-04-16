import { Component, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Patrol } from 'src/app/core/model/patrol.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipSelectors, ShipState } from 'src/app/store/ship-store';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
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

  constructor(private store: Store<ShipState.State>, private _specFacade: SpecFacade, private modalService: ModalService<BesatzungModalComponent>) {
    this.besatzung$ = this._specFacade.besatzung$
    this._specFacade.patrol$.subscribe((patrol: Patrol) => {
      if (patrol) this.id_streife = patrol.id!
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
