import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatAction, KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';

@Component({
  selector: 'app-checklist-items',
  templateUrl: './checklist-items.component.html',
  styleUrls: ['./checklist-items.component.sass'],
  encapsulation: ViewEncapsulation.None,
})

export class ChecklistItemsComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChecklistItemsComponent> | undefined;
  title: string = ''
  checklistForm!: FormGroup

  items$!: Observable<Checklistitem[]>
  checked$!: Observable<Checklistitem[]>
  unchecked$!: Observable<Checklistitem[]>

  constructor(private store: Store<RootStoreState>, private modalService: ModalService<ChecklistItemsComponent>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(KatSelectors.selectAllChecklistItems)) as Observable<Checklistitem[]>
    this.checked$ = this.store.pipe(select(KatSelectors.checkedChecklistItems)) as Observable<Checklistitem[]>
    this.unchecked$ = this.store.pipe(select(KatSelectors.uncheckedChecklistItems)) as Observable<Checklistitem[]>

    this.modalService.getData().then((data) => {
      this.title = data.data.title      
      // this.besatzungForm.patchValue(data.data.besatzung)
    })
  }

  toggleitem(item: Checklistitem) {
    item = Object.assign({}, item, { isChecked: !item.isChecked })
    this.store.dispatch(KatAction.updateChecklistItem({ item }))
  }

  cancel() {
    this.modal?.close()
  }
}
