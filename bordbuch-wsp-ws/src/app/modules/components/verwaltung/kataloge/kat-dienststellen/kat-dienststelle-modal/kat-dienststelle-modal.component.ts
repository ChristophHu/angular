import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dienststelle } from 'src/app/core/models/dienststelle.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-kat-dienststelle-modal',
  templateUrl: './kat-dienststelle-modal.component.html',
  styleUrls: ['./kat-dienststelle-modal.component.sass']
})
export class KatDienststelleModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatDienststelleModalComponent> | undefined;
  title: string = ''
  dienststelleForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatDienststelleModalComponent>, private _katFacade: KatFacade) {
    this.dienststelleForm = this._formBuilder.group({
      id: [],
      bezeichnung: [],
      position: this._formBuilder.group({
        latitude: [],
        longitude: []
      }),
      adresse: this._formBuilder.group({
        strasse: [],
        hausnummer: [],
        postleitzahl: [],
        ort: []
      }),
      mailadresse: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.dienststelleForm.patchValue(data.data.dienststelle)
    })
  }

  create() {
    const insert: Dienststelle = this.dienststelleForm.value
    this._katFacade.insertDienststelle(insert)
    this.modal?.close()
  }
  update() {
    const update: Dienststelle = this.dienststelleForm.value
    this._katFacade.updateDienststelle(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteDienststelle(this.dienststelleForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
