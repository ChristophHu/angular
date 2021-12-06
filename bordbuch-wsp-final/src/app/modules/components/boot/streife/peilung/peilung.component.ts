import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Peilung } from 'src/app/core/model/peilung.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipSelectors, ShipState } from 'src/app/store/ship-store';
import { PeilungModalComponent } from './peilung-modal/peilung-modal.component';

@Component({
  selector: 'peilung',
  templateUrl: './peilung.component.html',
  styleUrls: ['./peilung.component.sass']
})
export class PeilungComponent {

  peilungen$: Observable<Peilung[]> 

  constructor(private store: Store<ShipState.State>, private modalService: ModalService<PeilungModalComponent>) {
    this.peilungen$ = this.store.pipe(select(ShipSelectors.selectPeilungen)) as Observable<Peilung[]>
  }

  async openPeilungModal(): Promise<void> {
    const { PeilungModalComponent } = await import(
      './peilung-modal/peilung-modal.component'
    )
  
    this.modalService.open(PeilungModalComponent, {
      data: {
        title: 'Peilung erstellen',
        date: new Date().toISOString()
      }
    })
  }
}
