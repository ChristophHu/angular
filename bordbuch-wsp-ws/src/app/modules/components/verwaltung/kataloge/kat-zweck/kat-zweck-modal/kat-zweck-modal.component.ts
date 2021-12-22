import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-kat-zweck-modal',
  templateUrl: './kat-zweck-modal.component.html',
  styleUrls: ['./kat-zweck-modal.component.sass']
})
export class KatZweckModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatZweckModalComponent> | undefined;
  title: string = ''
  zweckForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatZweckModalComponent>, private _katFacade: KatFacade) {
    this.zweckForm = this._formBuilder.group({
      id: [],
      bezeichnung: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.zweckForm.patchValue(data.data.kat)
    })
  }

  create() {
    const insert: Kat = this.zweckForm.value
    this._katFacade.insertZweck(insert)
    this.modal?.close()
  }
  update() {
    const update: Kat = this.zweckForm.value
    this._katFacade.updateZweck(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteZweck(this.zweckForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
