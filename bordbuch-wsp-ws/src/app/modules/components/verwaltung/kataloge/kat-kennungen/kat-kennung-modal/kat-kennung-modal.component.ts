import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Kennung } from 'src/app/core/models/kennung.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-kat-kennung-modal',
  templateUrl: './kat-kennung-modal.component.html',
  styleUrls: ['./kat-kennung-modal.component.sass']
})
export class KatKennungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatKennungModalComponent> | undefined;
  title: string = ''
  kennungForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatKennungModalComponent>, private _katFacade: KatFacade) {
    this.kennungForm = this._formBuilder.group({
      id: [],
      bezeichnung: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.kennungForm.patchValue(data.data.kat)
    })
  }

  create() {
    const insert: Kennung = this.kennungForm.value
    this._katFacade.insertKennung(insert)
    this.modal?.close()
  }
  update() {
    const update: Kennung = this.kennungForm.value
    this._katFacade.updateKennung(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteKennung(this.kennungForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
