import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-kat-funktion-modal',
  templateUrl: './kat-funktion-modal.component.html',
  styleUrls: ['./kat-funktion-modal.component.sass']
})
export class KatFunktionModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatFunktionModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatFunktionModalComponent>, private _katFacade: KatFacade) {
    this.katForm = this._formBuilder.group({
      id: [],
      bezeichnung: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.katForm.patchValue(data.data.kat)
    })
  }

  create() {
    const insert: Kat = this.katForm.value
    this._katFacade.insertFunktion(insert)
    this.modal?.close()
  }
  update() {
    const update: Kat = this.katForm.value
    this._katFacade.updateFunktion(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteFunktion(this.katForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
