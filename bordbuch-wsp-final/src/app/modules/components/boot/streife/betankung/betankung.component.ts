import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Betankung } from 'src/app/core/model/betankung';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
import { BetankungModalComponent } from './betankung-modal/betankung-modal.component';

@Component({
  selector: 'app-betankung',
  templateUrl: './betankung.component.html',
  styleUrls: ['./betankung.component.sass']
})
export class BetankungComponent {
  
  id_schiff!: string
  betankungen$!: Observable<Betankung[]>

  constructor(private store: Store<RootStoreState>, private modalService: ModalService<BetankungModalComponent>) {
    this.betankungen$ = this.store.pipe(select(ShipSelectors.selectBetankungen)) as Observable<Betankung[]>
    this.store.pipe(select(ShipSelectors.selectShipId)).subscribe(id_ship => {
      if (id_ship) this.id_schiff = id_ship
    })
  }

  async openBetankungModal() {
    const { BetankungModalComponent } = await import(
      './betankung-modal/betankung-modal.component'
    )

    this.modalService.open(BetankungModalComponent, {
      data: {
        title: 'Betankung durchführen',
        id_ship: this.id_schiff,
        date: getLocalISO('now')
      }
    })
  }
}
