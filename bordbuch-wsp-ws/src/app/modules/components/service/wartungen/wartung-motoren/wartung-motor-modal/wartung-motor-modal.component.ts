import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-wartung-motor-modal',
  templateUrl: './wartung-motor-modal.component.html',
  styleUrls: ['./wartung-motor-modal.component.sass']
})
export class WartungMotorModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<WartungMotorModalComponent> | undefined;
  title: string = ''
  zaehlerstandForm: FormGroup

  zaehlerstandstypen$: Observable<Zaehlerstandstyp[]>
  schiffe$: Observable<Schiff[]>
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<WartungMotorModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.zaehlerstandstypen$ = _katFacade.zaehlerstandstypen$
    this.schiffe$ = _katFacade.schiffe$

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
    this.zaehlerstandForm.markAsDirty()
  }

  create() {
    const insert: Zaehlerstand = this.zaehlerstandForm.value
    this._specFacade.insertZaehlerstand(insert)
    this.modal?.close()
  }
  update() {
    let update: Zaehlerstand = this.zaehlerstandForm.value
    this._specFacade.updateZaehlerstand(update)
    this.modal?.close()
  }
  // delete() {
  //   this._specFacade.deleteZaehlerstand(this.zaehlerstandForm.value.id)
  //   this.modal?.close()
  // }

  cancel() {
    this.modal?.close()
  }
}
