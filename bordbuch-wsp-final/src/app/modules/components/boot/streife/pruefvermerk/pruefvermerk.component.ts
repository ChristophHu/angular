import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Reparatur } from 'src/app/core/model/reparatur'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { RootStoreState } from 'src/app/store/root-store.state'
import { ShipSelectors } from 'src/app/store/ship-store'
import { PruefvermerkModalComponent } from './pruefvermerk-modal/pruefvermerk-modal.component'

@Component({
  selector: 'pruefvermerke',
  templateUrl: './pruefvermerk.component.html',
  styleUrls: ['./pruefvermerk.component.sass']
})
export class PruefvermerkComponent implements OnInit {

  id_schiff!: string | undefined
  reparaturen$!: Observable<Reparatur[] | undefined>
  
  constructor(private store: Store<RootStoreState>, private modalService: ModalService<PruefvermerkModalComponent>) {
    this.reparaturen$ = this.store.pipe(select(ShipSelectors.selectReparaturen))
  }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectShipId)).subscribe(id_ship => {
      this.id_schiff = id_ship
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
          date: new Date().toISOString().substring(0,16)
        }
      })
    }
  }
}
