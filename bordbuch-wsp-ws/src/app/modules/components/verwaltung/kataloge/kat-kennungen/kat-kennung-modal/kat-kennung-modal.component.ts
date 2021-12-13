import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-kat-kennung-modal',
  templateUrl: './kat-kennung-modal.component.html',
  styleUrls: ['./kat-kennung-modal.component.sass']
})
export class KatKennungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatKennungModalComponent> | undefined;
  title: string = ''
  kennungForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatKennungModalComponent>) {
    this.kennungForm = this._formBuilder.group({
      id: [],
      bezeichnung: []
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
