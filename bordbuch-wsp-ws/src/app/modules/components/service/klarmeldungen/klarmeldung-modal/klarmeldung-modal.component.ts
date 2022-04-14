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
  selector: 'app-klarmeldung-modal',
  templateUrl: './klarmeldung-modal.component.html',
  styleUrls: ['./klarmeldung-modal.component.sass']
})
export class KlarmeldungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KlarmeldungModalComponent> | undefined;
  title: string = ''

  schiffe$: Observable<Schiff[]>

  klarmeldungForm: FormGroup
  status: any[] = [
    { bezeichnung: 'klar', value: true },
    { bezeichnung: 'unklar', value: false }
  ]
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KlarmeldungModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
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
    this.klarmeldungForm.dirty
  }
  setEnde() {
    this.klarmeldungForm.patchValue({ ende: getLocalISO('now') })
    this.klarmeldungForm.dirty
  }

  create() {
    const insert: Klarmeldung = { 
      id_schiff: this.klarmeldungForm.value.id_schiff, 
      beginn: this.klarmeldungForm.value.beginn,
      ende: this.klarmeldungForm.value.ende,
      klar: this.klarmeldungForm.value.klar
    }
    this._specFacade.insertKlarmeldung(insert)
  }
  update() {
    const update: Klarmeldung = {
      id: this.klarmeldungForm.value.id,
      id_schiff: this.klarmeldungForm.value.id_schiff, 
      beginn: this.klarmeldungForm.value.beginn,
      ende: this.klarmeldungForm.value.ende,
      klar: this.klarmeldungForm.value.klar
    }
    this._specFacade.updateKlarmeldung(update)
  }
  delete() {
    if (this.klarmeldungForm.value.id) this._specFacade.deleteKlarmeldung(this.klarmeldungForm.value.id)
  }

  cancel() {
    this.modal?.close()
  }
}
