import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-zaehlerstand-modal',
  templateUrl: './zaehlerstand-modal.component.html',
  styleUrls: ['./zaehlerstand-modal.component.sass']
})
export class ZaehlerstandModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ZaehlerstandModalComponent> | undefined;
  title: string = ''
  betankungForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<ZaehlerstandModalComponent>) {
    this.betankungForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      zaehlerstandstyp: [],
      date: [],
      value: [],
      betriebsstunden: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      // this.peilungForm.patchValue({ date: data.data.date })
    })
  }

  create() {

  }

  update() {

  }

  cancel() {
    this.modal?.close()
  }
}
