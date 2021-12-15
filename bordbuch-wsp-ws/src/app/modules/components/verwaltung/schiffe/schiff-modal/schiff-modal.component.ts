import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-schiff-modal',
  templateUrl: './schiff-modal.component.html',
  styleUrls: ['./schiff-modal.component.sass']
})
export class SchiffModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<SchiffModalComponent> | undefined;
  title: string = ''
  schiffForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<SchiffModalComponent>) {
    this.schiffForm = this._formBuilder.group({
      id: [],
      name: [],
      marke: [],
      typ: [],
      identifikationsnummer: [],
      dienststelle: []
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
