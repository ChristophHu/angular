import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { Checklist } from 'src/app/core/model/checklist.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Einsatzmittel } from 'src/app/core/model/einsatzmittel.model';
import { Geraetebuch } from 'src/app/core/model/geraetebuch.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';

@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.sass']
})
export class ChecklisteComponent implements OnInit {

  unchecked$!: Observable<Einsatzmittel[]>

  constructor(private store: Store<RootStoreState>, private modalService: ModalService<ChecklistItemsComponent>) {
    this.unchecked$ = this.store.pipe(select(ShipSelectors.selectUncheckedChecklistItems)) as Observable<Einsatzmittel[]>
  }

  ngOnInit(): void {
  }

  async openChecklisteModal() {
    const { ChecklistItemsComponent } = await import(
      './checklist-items/checklist-items.component'
    )

      this.modalService.open(ChecklistItemsComponent, {
        data: {
          title: 'Checkliste kontrollieren',
        }
      }
    )
  }
}
