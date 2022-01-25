import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Checklistitem } from 'src/app/core/models/checklistitem.model'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { Animations } from 'src/app/shared/animations'
import { Checklist } from 'src/app/core/models/checklist.model'
import { KatFacade } from 'src/app/store/kat-store/kat.facade'
import { SpecFacade } from 'src/app/store/spec-store/spec.facade'

@Component({
  selector: 'app-checkliste-modal',
  templateUrl: './checkliste-modal.component.html',
  styleUrls: ['./checkliste-modal.component.sass'],
  animations   : Animations
})
export class ChecklisteModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChecklisteModalComponent> | undefined;
  title: string = ''

  show: boolean = false
  checklistitemForm: FormGroup
  checklistForm: FormGroup
  item: Checklistitem = { id: '', bezeichnung: '', anzahl: '', seriennummern: '', checked: false, relevant: false, benachrichtigen: '' }

  // getFEM()
  kat: Checklistitem[] = []
  lastChecklist!: Checklist
  checklistKat: Checklistitem[] = []
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<ChecklisteModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    _katFacade.checkliste$.subscribe(kat => {
      this.checklistKat = []
      kat.forEach((el: any) => {
        this.checklistKat.push(Object.assign({}, { id: '', bezeichnung: '', anzahl: '', seriennummern: '', checked: false, relevant: false, benachrichtigen: '' }, el))
      })
    })

    this.checklistForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      name: [],
      marke: [],
      typ: [],
      dienststelle: []
    })

    this.checklistitemForm = this._formBuilder.group({
      id: [],
      bezeichnung: [],
      anzahl: [],
      seriennummern: [],
      checked: [],
      relevant: [],
      benachrichtigen: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.checklistForm.patchValue(data.data.schiff)
      this.load(data.data.schiff.id)
    })
  }

  load(id: string) {
    this._specFacade.getChecklistById(id).subscribe(checklist => {
      console.log(checklist)
      if (checklist && checklist.checklistItems!.length>0) {
        this.lastChecklist = checklist!
        
        let checklistItems: Checklistitem[] = []
        checklist.checklistItems!.forEach(item => {
          checklistItems.push(Object.assign({}, item, { checked: true }))
        })

        const key = 'id'
        let checkliste: Checklistitem[] = [...this.checklistKat, ...checklistItems]
        this.kat = [...new Map(checkliste.map(item => [item[key], item])).values()]
      } else {
        this.kat = [...this.checklistKat]
      }
    })
  }

  loadItem(id: string) {
    const item = this.kat.find(el => el.id == id)!
    this.checklistitemForm.patchValue(item)
    this.show = !this.show
  }
  setItem() {
    const item: Checklistitem = this.checklistitemForm.value
    this.kat = this.kat.filter(el => el.id != item.id)
    this.kat.push(item)
    this.show = !this.show
  }

  changeCheck(item: Checklistitem) {
    this.kat = this.kat.filter(el => el.id != item.id)
    this.kat.push(Object.assign({}, item, { checked: !item.checked }))
  }

  create() {
    const checklist: Checklist = { 
      id_schiff: this.checklistForm.value.id, 
      name: this.checklistForm.value.name,
      status: 'Liste neu gesetzt',
      streife: '3f7bc091-9f3d-428b-bf57-429f7dba25da', 
      datum: new Date().toISOString(), 
      checklistItems: this.kat.filter(el => el.checked == true), 
      gbookdaten: JSON.stringify(this.kat.filter(el => el.checked == true))
    }
    this._specFacade.insertChecklist(checklist)
  }

  delete() {
    if (this.checklistForm.value.id && this.lastChecklist.datum) this._specFacade.deleteChecklist(this.checklistForm.value.id, this.lastChecklist.datum)
  }

  cancel() {
    this.modal?.close()
  }
}
