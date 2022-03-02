import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-qrcode-modal',
  templateUrl: './qrcode-modal.component.html',
  styleUrls: ['./qrcode-modal.component.sass']
})
export class QrcodeModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<QrcodeModalComponent> | undefined;
  title: string = ''
  id: string = ''
  schiffForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<QrcodeModalComponent>) {
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
      this.id = data.data.schiff.id
      console.log(this.id)
    })
  }

  cancel() {
    this.modal?.close()
  }
}
