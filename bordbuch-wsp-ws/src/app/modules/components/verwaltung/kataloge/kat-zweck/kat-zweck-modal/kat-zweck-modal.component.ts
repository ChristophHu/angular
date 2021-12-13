import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-kat-zweck-modal',
  templateUrl: './kat-zweck-modal.component.html',
  styleUrls: ['./kat-zweck-modal.component.sass']
})
export class KatZweckModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatZweckModalComponent> | undefined;
  title: string = ''
  zweckForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatZweckModalComponent>) {
    this.zweckForm = this._formBuilder.group({
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
