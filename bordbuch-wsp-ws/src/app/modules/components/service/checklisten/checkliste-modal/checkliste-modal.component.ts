import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Checklistitem } from 'src/app/core/models/checklistitem.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Animations } from 'src/app/shared/animations'
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { Checklist } from 'src/app/core/models/checklist.model';

@Component({
  selector: 'app-checkliste-modal',
  templateUrl: './checkliste-modal.component.html',
  styleUrls: ['./checkliste-modal.component.sass'],
  animations   : Animations
})
export class ChecklisteModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChecklisteModalComponent> | undefined;
  title: string = ''

  checklistForm: FormGroup
  checklistKat: Checklistitem[] = []
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<ChecklisteModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    _katFacade.checkliste$.subscribe(kat => {
      this.checklistKat = []
      kat.forEach((el: any) => {
        this.checklistKat.push(Object.assign({}, { id: '', bezeichnung: '', anzahl: '', seriennummern: '', checked: false, relevant: false, benachrichtigen: '' }, el))
      })
    })

    this.checklistForm = this._formBuilder.group({
      datum: [],
      id_schiff: [],
      name: [],
      streife: [],
      status: [],
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.checklistForm.patchValue(data.data.checklist)
      this.checklistKat = data.data.checklist.checklistItems
    })
  }

  changeCheck(item: Checklistitem) {
    this.checklistKat = this.checklistKat.filter(el => el.id != item.id)
    this.checklistKat.push(Object.assign({}, item, { checked: !item.checked }))
  }

  create() {
    const checklist: Checklist = { 
      id_schiff: this.checklistForm.value.id_schiff, 
      name: this.checklistForm.value.name,
      status: 'Servicekontrolle',
      streife: '3f7bc091-9f3d-428b-bf57-429f7dba25ds', 
      datum: new Date().toISOString(), 
      checklistItems: this.checklistKat, 
      gbookdaten: JSON.stringify(this.checklistKat)
    }
    this._specFacade.insertChecklist(checklist)
  }

  benachrichtigen(item: Checklistitem) {
    let message: string
    let address: string[] = item.benachrichtigen.split(',')

    message = `Das Checklistenelement ${item.bezeichnung} ist defekt/verbraucht und muss erneuert/ausgetauscht werden.`
    
    message = `mailto:${address.join(';')}+?subject=files&body=${message}`
    window.location.href = message
  }

  // delete() {
  //   if (this.checklistForm.value.id && this.lastChecklist.datum) this._specFacade.deleteChecklist(this.checklistForm.value.id, this.lastChecklist.datum)
  // }

  cancel() {
    this.modal?.close()
  }
}
