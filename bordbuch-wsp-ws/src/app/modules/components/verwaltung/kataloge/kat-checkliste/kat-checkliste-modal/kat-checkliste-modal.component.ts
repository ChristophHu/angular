import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-kat-checkliste-modal',
  templateUrl: './kat-checkliste-modal.component.html',
  styleUrls: ['./kat-checkliste-modal.component.sass']
})
export class KatChecklisteModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatChecklisteModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatChecklisteModalComponent>, private _katFacade: KatFacade) {
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
    this._katFacade.insertChecklist(insert)
    this.modal?.close()
  }
  update() {
    const update: Kat = this.katForm.value
    this._katFacade.updateChecklist(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteChecklist(this.katForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
