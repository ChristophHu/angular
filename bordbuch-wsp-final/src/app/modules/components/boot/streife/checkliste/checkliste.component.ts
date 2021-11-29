import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';


@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.sass']
})
export class ChecklisteComponent implements OnInit {

  fehlendeItems$: Observable<Checklistitem[]>

  constructor(private store: Store<RootStoreState>, private modalService: ModalService<ChecklistItemsComponent>) {
    this.fehlendeItems$ = this.store.pipe(select(KatSelectors.uncheckedChecklistItems)) as Observable<Checklistitem[]>
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
