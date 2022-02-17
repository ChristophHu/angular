import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Checklist } from 'src/app/core/model/checklist.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Einsatzmittel } from 'src/app/core/model/einsatzmittel.model';
import { Geraetebuch } from 'src/app/core/model/geraetebuch.model';
import { Patrol } from 'src/app/core/model/patrol.model';
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
  edit: boolean = false
  allCheck: boolean = true
  checklist!: Checklist

  patrolId: string = ''
  // items$!: Observable<Checklistitem[]>
  checked$!: Observable<Checklistitem[]>
  unchecked$!: Observable<Checklistitem[]>

  constructor(private store: Store<RootStoreState>, private modalService: ModalService<ChecklistItemsComponent>) { }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id => this.patrolId = id!)

    this.checked$ = this.store.pipe(select(ShipSelectors.selectCheckedChecklistItems)) as Observable<Checklistitem[]>
    this.unchecked$ = this.store.pipe(select(ShipSelectors.selectUncheckedChecklistItems)) as Observable<Checklistitem[]>

    this.modalService.getData().then((data) => {
      this.title = data.data.title      
    })

    this.store.pipe(select(ShipSelectors.selectChecklist)).subscribe((checklist: any) => {
      this.checklist = checklist
    })
  }

  toggleCheck() {
    this.allCheck = !this.allCheck
    if (this.allCheck) {
      this.unchecked$.pipe(take(1)).subscribe(items => {
        items.forEach(item => item.checked = this.allCheck)
      })
    } else {
      this.checked$.pipe(take(1)).subscribe(items => {
        items.forEach(item => item.checked = this.allCheck)
      })
    }
  }

  toggleitem(item: Checklistitem) {
    this.edit = true
    const newItem: Checklistitem = Object.assign({}, item, { checked: !item.checked })
    const update: Checklist = Object.assign({}, this.checklist)
    const cleared: Checklistitem[] = this.checklist.checklistItems?.filter(el => el.id != newItem.id)!
    update.checklistItems = [...cleared, newItem]

    this.store.dispatch(ShipAction.updateChecklist({ update }))
  }
  getChecklistStatus(checklistItems?: Checklistitem[]): string {
    let status = 'vollständig'
    checklistItems?.forEach((checklistItem: Checklistitem) => {
        switch (true) {
            case (checklistItem.checked == false && checklistItem.relevant == false):
                status = 'unvollständig'
                break
            case (checklistItem.checked == false && checklistItem.relevant == true):
                status = 'Tätigkeit eingeschränkt'
                break
            default:
                status = 'vollständig'
        }
    })
    return status
  }

  benachrichtigen(item: Checklistitem) {
    let message: string
    let address: string[] = item.benachrichtigen.split(',')

    message = `Das Checklistenelement ${item.bezeichnung} ist defekt/verbraucht und muss erneuert/ausgetauscht werden.`
    
    message = `mailto:${address.join('; ')}?subject=Information: Checkliste zu ${this.checklist.name}&body=${message}`
    window.location.href = message
  }

  create() {
    const status: string = this.getChecklistStatus(this.checklist.checklistItems)
    const insert: Checklist = Object.assign({}, this.checklist, { id: this.patrolId, datum: new Date().toISOString().substring(0,16), status })
    // console.log(insert)
    this.store.dispatch(ShipAction.insertChecklist({ insert }))
  }

  cancel() {
    this.modal?.close()  
  }
}