import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { ZaehlerstandModalComponent } from './zaehlerstand-modal/zaehlerstand-modal.component';

@Component({
  selector: 'app-zaehlerstand',
  templateUrl: './zaehlerstand.component.html',
  styleUrls: ['./zaehlerstand.component.sass']
})
export class ZaehlerstandComponent {
  
  zaehlerstaende$!: Observable<Zaehlerstand[] | undefined>

  constructor(private modalService: ModalService<ZaehlerstandModalComponent>, private _specFacade: SpecFacade) {
    this.zaehlerstaende$ = this._specFacade.allZaehlerstaende$
  }

  async openZaehlerstandModal(zaehlerstand: Zaehlerstand) {
    const { ZaehlerstandModalComponent } = await import(
      './zaehlerstand-modal/zaehlerstand-modal.component'
    )
    this.modalService.open(ZaehlerstandModalComponent, {
      data: {
        title: 'Zählerstand aktualisieren',
        zaehlerstand: Object.assign({}, zaehlerstand, {date: getLocalISO('now') })
      }
    })
  }
}
