import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Betankung } from 'src/app/core/model/betankung';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { BetankungModalComponent } from './betankung-modal/betankung-modal.component';

@Component({
  selector: 'app-betankung',
  templateUrl: './betankung.component.html',
  styleUrls: ['./betankung.component.sass']
})
export class BetankungComponent {
  
  id_schiff!: string
  betankungen$!: Observable<Betankung[]>

  constructor(private _specFacade: SpecFacade, private modalService: ModalService<BetankungModalComponent>) {
    this.betankungen$ = this._specFacade.betankung$
    this._specFacade.ship$.subscribe(ship => {
      if (ship) this.id_schiff = ship.id
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
