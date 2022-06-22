import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Klarmeldung } from 'src/app/core/models/klarmeldung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-instandsetzung-modal',
  templateUrl: './instandsetzung-modal.component.html',
  styleUrls: ['./instandsetzung-modal.component.sass']
})
export class InstandsetzungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<InstandsetzungModalComponent> | undefined;
  title: string = ''

  schiffe$: Observable<Schiff[]>

  klarmeldungForm: FormGroup
  status: any[] = [
    { bezeichnung: 'klar', value: true },
    { bezeichnung: 'unklar', value: false }
  ]
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<InstandsetzungModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.schiffe$ = this._katFacade.schiffe$
    this.klarmeldungForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      name: [],
      beginn: [],
      ende: [],
      klar: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.klarmeldungForm.patchValue(data.data.klarmeldung)
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => this.klarmeldungForm.patchValue({ id_schiff: id }))
  }
  setBeginn() {
    this.klarmeldungForm.patchValue({ beginn: getLocalISO('now') })
    this.klarmeldungForm.markAsDirty()
    // this.klarmeldungForm.value.klar = false
  }
  setEnde() {
    this.klarmeldungForm.patchValue({ ende: getLocalISO('now') })
    this.klarmeldungForm.markAsDirty()
    // this.klarmeldungForm.value.klar = true
  }

  create() {
    const insert: Klarmeldung = { 
      id_schiff: this.klarmeldungForm.value.id_schiff, 
      beginn: this.klarmeldungForm.value.beginn,
      ende: this.klarmeldungForm.value.ende,
      klar: this.klarmeldungForm.value.klar,
      name: this.klarmeldungForm.value.name
    }
    this._specFacade.insertKlarmeldung(insert)
    this.modal?.close()
  }
  update() {
    const update: Klarmeldung = {
      id: this.klarmeldungForm.value.id,
      id_schiff: this.klarmeldungForm.value.id_schiff, 
      beginn: this.klarmeldungForm.value.beginn,
      ende: this.klarmeldungForm.value.ende,
      klar: this.klarmeldungForm.value.klar,
      name: this.klarmeldungForm.value.name
    }
    this._specFacade.updateKlarmeldung(update)
    this.modal?.close()
  }
  delete() {
    if (this.klarmeldungForm.value.id) this._specFacade.deleteKlarmeldung(this.klarmeldungForm.value.id)
  }

  cancel() {
    this.modal?.close()
  }
}
