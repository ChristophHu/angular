import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Instandsetzung } from 'src/app/core/models/Instandsetzung.model';
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

  instandsetzungForm: FormGroup
  status: any[] = [
    { bezeichnung: 'Instandsetzung', value: true },
    { bezeichnung: 'Fahrbereit', value: false }
  ]
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<InstandsetzungModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.schiffe$ = this._katFacade.schiffe$
    this.instandsetzungForm = this._formBuilder.group({
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
      this.instandsetzungForm.patchValue(data.data.instandsetzung)
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => this.instandsetzungForm.patchValue({ id_schiff: id }))
  }
  setBeginn() {
    this.instandsetzungForm.patchValue({ beginn: getLocalISO('now') })
    this.instandsetzungForm.markAsDirty()
  }
  setEnde() {
    this.instandsetzungForm.patchValue({ ende: getLocalISO('now') })
    this.instandsetzungForm.markAsDirty()
  }

  create() {
    const insert: Instandsetzung = { 
      id_schiff: this.instandsetzungForm.value.id_schiff, 
      beginn: this.instandsetzungForm.value.beginn,
      ende: this.instandsetzungForm.value.ende,
      klar: this.instandsetzungForm.value.klar,
      name: this.instandsetzungForm.value.name
    }
    this._specFacade.insertInstandsetzung(insert)
    this.modal?.close()
  }
  update() {
    const update: Instandsetzung = {
      id: this.instandsetzungForm.value.id,
      id_schiff: this.instandsetzungForm.value.id_schiff, 
      beginn: this.instandsetzungForm.value.beginn,
      ende: this.instandsetzungForm.value.ende,
      klar: this.instandsetzungForm.value.klar,
      name: this.instandsetzungForm.value.name
    }
    this._specFacade.updateInstandsetzung(update)
    this.modal?.close()
  }
  delete() {
    if (this.instandsetzungForm.value.id) this._specFacade.deleteInstandsetzung(this.instandsetzungForm.value.id)
  }

  cancel() {
    this.modal?.close()
  }
}
