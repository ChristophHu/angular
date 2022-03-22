import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
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
  allCheck: boolean = false

  // motorTabForm: FormGroup
  motorForm: FormGroup
  item: Kat = { id: '', bezeichnung: '' }

  schiff: Schiff
  kat: any[] = []
  zaehlerstandstypenKat: any[] = []
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<MotorModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    _katFacade.zaehlerstandstypen$.subscribe(kat => {
      this.zaehlerstandstypenKat = kat
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
      this.schiff = data.data.schiff
      this.motorForm.patchValue(data.data.schiff)

      this.load(data.data.schiff.id)
    })
  }

  load(id: string) {
    this._specFacade.getZaehlerstaendeById(id).subscribe(zaehlerstaende => {

      if (zaehlerstaende && zaehlerstaende.length > 0) {
      
        let zaehlerstandstypen: any[] = []
        zaehlerstaende.forEach((zaehlerstand: Zaehlerstand) => {
          zaehlerstandstypen.push(Object.assign({}, { id: zaehlerstand.id, zaehlerstandstyp: zaehlerstand.zaehlerstandstyp, checked: true, value: zaehlerstand.value }))
        })

        let zaehlerstandstypenKat: any[] = []
        this.zaehlerstandstypenKat.forEach((zaehlerstandstyp: any) => {
          zaehlerstandstypenKat.push(Object.assign({}, zaehlerstandstyp, { checked: false, value: 0 }))
        })
        
        const key = 'zaehlerstandstyp'
        let k: Zaehlerstandstyp[] = [...zaehlerstandstypenKat, ...zaehlerstandstypen]
        this.kat = [...new Map(k.map(item => [item[key], item])).values()]
      } else {
        let zaehlerstandstypenKat: any[] = []
        this.zaehlerstandstypenKat.forEach((zaehlerstandstyp: any) => {
          zaehlerstandstypenKat.push(Object.assign({}, zaehlerstandstyp, { checked: false }))
        })
        this.kat = [...zaehlerstandstypenKat]
      }
    })
  }

  toggleCheck() {
    this.allCheck = !this.allCheck
    this.kat.forEach(motor => {
      motor.checked = this.allCheck
    })
  }
  
  changeCheck(item: { id: string, zaehlerstandstyp: string, checked: boolean, value: number }) {

    if (item.checked == false) {
      // insert
      const insert = { id: '', id_schiff: this.schiff.id, id_zaehlerstandstyp: item.id, name: this.schiff.name, zaehlerstandstyp: item.zaehlerstandstyp, value: 0, date: new Date().toISOString(), betriebsstunden: 0 }
      this._specFacade.insertZaehlerstand(insert)
    } else {
      // delete
      if (item.value != 0) {
        // console.log(`Es existieren Zaehlerstände zu diesem Eintrag!`)
        this._specFacade.deleteZaehlerstand(item.id)
      } else {
        this._specFacade.deleteZaehlerstand(item.id)
      }
    }
    this.kat = this.kat.filter(el => el.id != item.id)
    this.kat.push(Object.assign({}, item, { checked: !item.checked }))
  }

  create() {

    this.modal?.close()
  }

  delete() {
    // if (this.checklistForm.value.id && this.lastChecklist.datum) this._specFacade.deleteChecklist(this.checklistForm.value.id, this.lastChecklist.datum)
  }

  cancel() {
    this.modal?.close()
  }
}