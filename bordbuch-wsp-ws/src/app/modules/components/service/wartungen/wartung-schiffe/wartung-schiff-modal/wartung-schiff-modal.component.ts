import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-wartung-schiff-modal',
  templateUrl: './wartung-schiff-modal.component.html',
  styleUrls: ['./wartung-schiff-modal.component.sass']
})
export class WartungSchiffModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<WartungSchiffModalComponent> | undefined;
  title: string = ''
  zaehlerstandForm: FormGroup
  // schiffForm: FormGroup

  zaehlerstandstypen$: Observable<Zaehlerstandstyp[]>
  schiffe$: Observable<Schiff[]>
  // dienststellen$: Observable<Kat[]>

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<WartungSchiffModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.zaehlerstandstypen$ = _katFacade.zaehlerstandstypen$
    this.schiffe$ = _katFacade.schiffe$
    // this.dienststellen$ = _katFacade.dienststellen$

    this.zaehlerstandForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      id_zaehlerstandstyp: [],
      name: [],
      zaehlerstandstyp: [],
      date: [],
      value: [],
      betriebsstunden: []
    })
    // this.schiffForm = this._formBuilder.group({
    //   id: [],
    //   id_dienststelle: [],
    //   name: [],
    //   marke: [],
    //   typ: [],
    //   identifikationsnummer: [],
    //   dienststelle: [],
    //   durchsicht: []
    // })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      
      this.zaehlerstandForm.patchValue({ date: data.data.date })
      this.zaehlerstandForm.patchValue(data.data.zaehlerstand)
      this.selectZaehlerstandstyp(data.data.zaehlerstand.zaehlerstandstyp)
    })
  }

  selectZaehlerstandstyp(zaehlerstandstyp: string) {
    console.log(zaehlerstandstyp)
    this._katFacade.getIdByZaehlerstandstyp(zaehlerstandstyp).subscribe(id => this.zaehlerstandForm.patchValue({ id_zaehlerstandstyp: id }))
  }
  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => {
      this.zaehlerstandForm.patchValue({ id_schiff: id })
      this.zaehlerstandForm.value.value == '' ? this.zaehlerstandForm.value.value = 0 : null
    })

  }
  setDate() {
    this.zaehlerstandForm.patchValue({ date: getLocalISO('now') })
    this.zaehlerstandForm.dirty
  }

  // create() {
  //   const insert: Zaehlerstand = this.zaehlerstandForm.value
  //   this._specFacade.insertZaehlerstand(insert)
  //   this.modal?.close()
  // }
  update() {
    let update: Zaehlerstand = this.zaehlerstandForm.value
    this._katFacade.getShipById(this.zaehlerstandForm.value.id).subscribe(schiff => {
      if (schiff) {
        let update: Schiff = Object.assign({}, schiff, { durchsicht: this.zaehlerstandForm.value.betriebsstunden })
        console.log(update)
        this._katFacade.updateSchiff(update)
      }
    })
    this._specFacade.updateZaehlerstand(update)
    this.modal?.close()
  }
  delete() {
    this._specFacade.deleteZaehlerstand(this.zaehlerstandForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
