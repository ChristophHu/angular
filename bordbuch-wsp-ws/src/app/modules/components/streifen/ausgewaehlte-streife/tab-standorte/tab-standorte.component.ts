import { Component, Input, OnInit } from '@angular/core';
import { Standort } from 'src/app/core/models/standort.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { AusgewaehlterStandortModalComponent } from '../ausgewaehlter-standort-modal/ausgewaehlter-standort-modal.component';

@Component({
  selector: 'tab-standorte',
  templateUrl: './tab-standorte.component.html',
  styleUrls: ['./tab-standorte.component.sass']
})
export class TabStandorteComponent implements OnInit {
  standorte: Standort[] = []

  constructor(private _modalService: ModalService<AusgewaehlterStandortModalComponent>, private _specFacade: SpecFacade) { }

  ngOnInit(): void {
    this._specFacade.allStandorte$.subscribe(standorte => {
      if (standorte) {
        this.standorte = standorte
      }
    })
  }

  async showModal(standort?: Standort): Promise<void> {
    const { AusgewaehlterStandortModalComponent } = await import(
      '../ausgewaehlter-standort-modal/ausgewaehlter-standort-modal.component'
    )
    if (standort) {
      this._modalService.open(AusgewaehlterStandortModalComponent, {
        data: {
          title: 'Position bearbeiten',
          standort
        }
      })
    } else {
      this._modalService.open(AusgewaehlterStandortModalComponent, {
        data: {
          title: 'Position hinzufügen',
          date: new Date().toISOString()
        }
      })
    }
  }

  delete(id: string) {
    this._specFacade.deleteStandort(id)
  }
}
