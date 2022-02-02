import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-motor-modal',
  templateUrl: './motor-modal.component.html',
  styleUrls: ['./motor-modal.component.sass']
})
export class MotorModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<MotorModalComponent> | undefined;
  title: string = ''
  allCheck: boolean = true

  // motorTabForm: FormGroup
  motorForm: FormGroup
  item: Kat = { id: '', bezeichnung: '' }

  // getFEM()
  kat: Zaehlerstandstyp[] = []
  // lastChecklist!: Checklist
  // checklistKat: Checklistitem[] = []
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<MotorModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    _katFacade.zaehlerstandstypen$.subscribe(kat => {
      this.kat = kat
    })

    this.motorForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      name: [],
      marke: [],
      typ: [],
      dienststelle: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.motorForm.patchValue(data.data.schiff)
      // this.load(data.data.schiff.id)
    })
  }

  toggleCheck() {
    this.allCheck = !this.allCheck
    // this.kat.forEach(motor => {
    //   motor.checked = this.allCheck
    // })
  }

  // load(id: string) {
  //   this._specFacade.getChecklistById(id).subscribe(checklist => {
  //     console.log(checklist)
  //     if (checklist && checklist.checklistItems!.length>0) {
  //       this.lastChecklist = checklist!
        
  //       let checklistItems: Checklistitem[] = []
  //       checklist.checklistItems!.forEach(item => {
  //         checklistItems.push(Object.assign({}, item, { checked: true }))
  //       })

  //       const key = 'id'
  //       let checkliste: Checklistitem[] = [...this.checklistKat, ...checklistItems]
  //       this.kat = [...new Map(checkliste.map(item => [item[key], item])).values()]
  //     } else {
  //       this.kat = [...this.checklistKat]
  //     }
  //   })
  // }

  // loadItem(id: string) {
  //   const item = this.kat.find(el => el.id == id)!
  //   this.checklistitemForm.patchValue(item)
  //   this.show = !this.show
  // }
  // setItem() {
  //   const item: Checklistitem = this.checklistitemForm.value
  //   this.kat = this.kat.filter(el => el.id != item.id)
  //   this.kat.push(item)
  //   this.show = !this.show
  // }

  // changeCheck(item: Checklistitem) {
  //   this.kat = this.kat.filter(el => el.id != item.id)
  //   this.kat.push(Object.assign({}, item, { checked: !item.checked }))
  // }

  create() {
    // const checklist: Checklist = { 
    //   id_schiff: this.checklistForm.value.id, 
    //   name: this.checklistForm.value.name,
    //   status: 'Liste neu gesetzt',
    //   streife: '3f7bc091-9f3d-428b-bf57-429f7dba25da', 
    //   datum: new Date().toISOString(),
    //   checklistItems: this.kat.filter(el => el.checked == true), 
    //   gbookdaten: JSON.stringify(this.kat.filter(el => el.checked == true))
    // }
    // this._specFacade.insertChecklist(checklist)
    this.modal?.close()
  }

  delete() {
    // if (this.checklistForm.value.id && this.lastChecklist.datum) this._specFacade.deleteChecklist(this.checklistForm.value.id, this.lastChecklist.datum)
  }

  cancel() {
    this.modal?.close()
  }
}