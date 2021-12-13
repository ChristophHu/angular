import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-checkliste-modal',
  templateUrl: './checkliste-modal.component.html',
  styleUrls: ['./checkliste-modal.component.sass']
})
export class ChecklisteModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChecklisteModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup

  table_interact1: boolean = true
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<ChecklisteModalComponent>) {
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
