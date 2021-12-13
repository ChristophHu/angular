import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-kat-checkliste-modal',
  templateUrl: './kat-checkliste-modal.component.html',
  styleUrls: ['./kat-checkliste-modal.component.sass']
})
export class KatChecklisteModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatChecklisteModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatChecklisteModalComponent>) {
    this.katForm = this._formBuilder.group({
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
