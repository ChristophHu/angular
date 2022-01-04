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
  selector: 'app-wartung-schiff-modal',
  templateUrl: './wartung-schiff-modal.component.html',
  styleUrls: ['./wartung-schiff-modal.component.sass']
})
export class WartungSchiffModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<WartungSchiffModalComponent> | undefined;
  title: string = ''
  schiffForm: FormGroup

  dienststellen$: Observable<Kat[]>

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<WartungSchiffModalComponent>, private _katFacade: KatFacade) {
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

  create() {
    const insert: Schiff = this.schiffForm.value
    this._katFacade.insertSchiff(insert)
    this.modal?.close()
  }
  update() {
    let update: Schiff = this.schiffForm.value
    this._katFacade.updateSchiff(update)
    this.modal?.close()
  }
  // delete() {
  //   this._katFacade.deleteSchiff(this.schiffForm.value.id)
  //   this.modal?.close()
  // }

  cancel() {
    this.modal?.close()
  }
}
