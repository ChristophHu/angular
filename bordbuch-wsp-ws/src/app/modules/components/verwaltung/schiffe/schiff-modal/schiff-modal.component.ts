import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Checklist } from 'src/app/core/models/checklist.model';
import { Kat } from 'src/app/core/models/kat.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-schiff-modal',
  templateUrl: './schiff-modal.component.html',
  styleUrls: ['./schiff-modal.component.sass']
})
export class SchiffModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<SchiffModalComponent> | undefined;
  title: string = ''
  schiffForm: FormGroup

  dienststellen$: Observable<Kat[]>

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<SchiffModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.dienststellen$ = _katFacade.dienststellen$

    this.schiffForm = this._formBuilder.group({
      id: [],
      id_dienststelle: [],
      name: [],
      marke: [],
      typ: [],
      identifikationsnummer: [],
      dienststelle: [],
      durchsicht: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.schiffForm.patchValue(data.data.schiff)
      if (data.data.schiff) this.selectDienststelle(data.data.schiff.dienststelle)
    })
  }

  selectDienststelle(dienststelle: string) {
    this._katFacade.getIdByDienststelle(dienststelle).subscribe(id => this.schiffForm.patchValue({ id_dienststelle: id }))
  }
  // setDate() {
  //   this.schiffForm.patchValue({ durchsicht: getLocalISO('now') })
  //   this.schiffForm.dirty
  // }

  create() {
    const insert: Schiff = this.schiffForm.value
    this._katFacade.insertSchiff(insert)
    this._katFacade.schiffe$.subscribe((schiffe: Schiff[])=> {
      console.log(schiffe)
      this._katFacade.getIdByShip(insert.name).subscribe(id => {
        if (id) {
          this.createFirstChecklist(id, insert)
          this.createFirstZaehlerstand(id, insert)
        }
      })
    })
    this.modal?.close()
  }

  createFirstChecklist(id: string, schiff: Schiff) {
    const checklist: Checklist = { 
      id_schiff: id, 
      name: schiff.name,
      status: 'Liste neu gesetzt',
      streife: '3f7bc091-9f3d-428b-bf57-429f7dba25da', 
      datum: new Date().toISOString(),
      checklistItems: [], 
      gbookdaten: JSON.stringify([])
    }
    this._specFacade.insertChecklist(checklist)
  }
  createFirstZaehlerstand(id: string, schiff: Schiff) {
    const zaehlerstand: Zaehlerstand = {
      id: '',
      id_schiff: id, 
      name: schiff.name,
      zaehlerstandstyp: '909e5100-f4b1-494d-a679-e728f7e0bd5f',
      date: new Date().toISOString(),
      value: 0,
      betriebsstunden: this.schiffForm.value.betriebsstunden
    }
    this._specFacade.insertZaehlerstand(zaehlerstand)
  }

  update() {
    let update: Schiff = this.schiffForm.value
    this._katFacade.updateSchiff(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteSchiff(this.schiffForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
