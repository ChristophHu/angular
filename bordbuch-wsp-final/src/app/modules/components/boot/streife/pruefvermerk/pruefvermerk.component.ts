import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Reparatur } from 'src/app/core/model/reparatur'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { getLocalISO } from 'src/app/shared/utils'
import { SpecFacade } from 'src/app/store/spec-store/spec.facade'
import { PruefvermerkModalComponent } from './pruefvermerk-modal/pruefvermerk-modal.component'

@Component({
  selector: 'pruefvermerke',
  templateUrl: './pruefvermerk.component.html',
  styleUrls: ['./pruefvermerk.component.sass']
})
export class PruefvermerkComponent implements OnInit {
  
  id_schiff!: string | undefined
  reparaturen$!: Observable<Reparatur[] | undefined>
  
  constructor(private _specFacade: SpecFacade, private modalService: ModalService<PruefvermerkModalComponent>) {
    this.reparaturen$ = this._specFacade.reparaturen$
  }

  ngOnInit(): void {
    this._specFacade.ship$.subscribe(ship => {
      this.id_schiff = ship.id
    })
  }

  async openPruefvermerkModal(reparatur?: Reparatur) {
    const { PruefvermerkModalComponent } = await import(
      './pruefvermerk-modal/pruefvermerk-modal.component'
    )
    if (reparatur) {
      this.modalService.open(PruefvermerkModalComponent, {
        data: {
          title: 'Prüfvermerk einsehen',
          reparatur
        }
      })
    } else {
      this.modalService.open(PruefvermerkModalComponent, {
        data: {
          title: 'Prüfvermerk erstellen',
          id_ship: this.id_schiff,
          date: getLocalISO('now')
        }
      })
    }
  }
}
