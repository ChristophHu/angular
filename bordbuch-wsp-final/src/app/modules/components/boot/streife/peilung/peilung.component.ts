import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipSelectors, ShipState } from 'src/app/store/ship-store';
import { PeilungModalComponent } from './peilung-modal/peilung-modal.component';

export interface Peilung {
  id: string
  id_schiff: string
  tank: string
  menge: number
  date: Date
}

@Component({
  selector: 'peilung',
  templateUrl: './peilung.component.html',
  styleUrls: ['./peilung.component.sass']
})
export class PeilungComponent implements OnInit {

  // peilungen: Peilung[] = [
  //   { id: '1', id_schiff: '1',  tank: 'Haupttank', menge: 123, date: new Date() }
  // ]
  peilungen$!: Observable<Peilung[]> 

  constructor(private store: Store<ShipState.State>, private modalService: ModalService<PeilungModalComponent>) { }

  ngOnInit(): void {
    this.peilungen$ = this.store.pipe(select(ShipSelectors.selectPeilungen)) as Observable<Peilung[]>
  }

  async openPeilungModal(id: string) {
    const { PeilungModalComponent } = await import(
      './peilung-modal/peilung-modal.component'
    )
  
    this.store.pipe(select(ShipSelectors.selectPeilungenById(id))).subscribe(peilung => {
      this.modalService.open(PeilungModalComponent, {
        data: {
          title: 'Peilung durchführen',
          peilung
        }
      })
    })

  }

}
