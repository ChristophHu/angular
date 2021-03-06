import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Checklist } from 'src/app/core/model/checklist.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

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
  checked$!: Observable<Checklistitem[]>
  unchecked$!: Observable<Checklistitem[]>

  constructor(private _specFacade: SpecFacade, private modalService: ModalService<ChecklistItemsComponent>) { }

  ngOnInit(): void {
    this._specFacade.patrol$.subscribe(patrol => this.patrolId = patrol.id!)
    this.checked$ = this._specFacade.checklistItemsChecked$
    this.unchecked$ = this._specFacade.checklistItemsUnchecked$

    this.modalService.getData().then((data) => {
      this.title = data.data.title
    })

    this._specFacade.checklist$.subscribe((checklist: any) => {
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
    this._specFacade.updateChecklist(update)
  }
  getChecklistStatus(checklistItems?: Checklistitem[]): string {
    let status = 'vollst??ndig'
    checklistItems?.forEach((checklistItem: Checklistitem) => {
        switch (true) {
            case (checklistItem.checked == false && checklistItem.relevant == false):
                status = 'unvollst??ndig'
                break
            case (checklistItem.checked == false && checklistItem.relevant == true):
                status = 'T??tigkeit eingeschr??nkt'
                break
            default:
                status = 'vollst??ndig'
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
    const insert: Checklist = Object.assign({}, this.checklist, { id: this.patrolId, datum: getLocalISO('now'), status })
    this._specFacade.insertChecklist(insert)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()  
  }
}