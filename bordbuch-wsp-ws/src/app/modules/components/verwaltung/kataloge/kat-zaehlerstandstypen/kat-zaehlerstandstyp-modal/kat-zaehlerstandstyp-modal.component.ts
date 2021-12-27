import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Kat } from 'src/app/core/models/kat.model';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-kat-zaehlerstandstyp-modal',
  templateUrl: './kat-zaehlerstandstyp-modal.component.html',
  styleUrls: ['./kat-zaehlerstandstyp-modal.component.sass']
})
export class KatZaehlerstandstypModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatZaehlerstandstypModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatZaehlerstandstypModalComponent>, private _katFacade: KatFacade) {
    this.katForm = this._formBuilder.group({
      id: [],
      zaehlerstandstyp: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.katForm.patchValue(data.data.kat)
    })
  }

  create() {
    const insert: Zaehlerstandstyp = this.katForm.value
    this._katFacade.insertZaehlerstandstyp(insert)
    this.modal?.close()
  }
  update() {
    const update: Zaehlerstandstyp = this.katForm.value
    this._katFacade.updateZaehlerstandstyp(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deleteZaehlerstandstyp(this.katForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
