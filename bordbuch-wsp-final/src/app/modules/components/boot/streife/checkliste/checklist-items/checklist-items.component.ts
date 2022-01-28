import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Checklist } from 'src/app/core/model/checklist.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Einsatzmittel } from 'src/app/core/model/einsatzmittel.model';
import { Geraetebuch } from 'src/app/core/model/geraetebuch.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatAction, KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';

@Component({
  selector: 'app-checklist-items',
  templateUrl: './checklist-items.component.html',
  styleUrls: ['./checklist-items.component.sass'],
  encapsulation: ViewEncapsulation.None,
})

export class ChecklistItemsComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChecklistItemsComponent> | undefined;
  title: string = ''
  geraetebuch!: Geraetebuch
  // checklistForm!: FormGroup

  items$!: Observable<Checklistitem[]>
  checked$!: Observable<Checklistitem[]>
  unchecked$!: Observable<Checklistitem[]>

  constructor(private store: Store<RootStoreState>, private modalService: ModalService<ChecklistItemsComponent>) { }

  ngOnInit(): void {
    this.checked$ = this.store.pipe(select(ShipSelectors.selectCheckedChecklistItems)) as Observable<Checklistitem[]>
    this.unchecked$ = this.store.pipe(select(ShipSelectors.selectUncheckedChecklistItems)) as Observable<Checklistitem[]>

    this.modalService.getData().then((data) => {
      this.title = data.data.title      
    })

    this.store.pipe(select(ShipSelectors.selectChecklist)).subscribe((geraetebuch: any) => {
      this.geraetebuch = geraetebuch
    })
  }

  toggleitem(item: Checklistitem) {
    let sonstiges: string
    if (item.checked == true) { 
      sonstiges = 'false'
    } else {
      sonstiges = 'true'
    }
    // const einsatzmittel = Object.assign({}, item, { checked })

    // this.store.dispatch(ShipAction.updateChecklistItem({ einsatzmittel }))
  }

  cancel() {
    this.store.dispatch(ShipAction.insertChecklist({ geraetebuch: this.geraetebuch }))
    this.modal?.close()  
  }
}