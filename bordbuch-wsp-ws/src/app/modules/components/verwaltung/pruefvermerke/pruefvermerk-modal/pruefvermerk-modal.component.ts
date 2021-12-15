import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-pruefvermerk-modal',
  templateUrl: './pruefvermerk-modal.component.html',
  styleUrls: ['./pruefvermerk-modal.component.sass']
})
export class PruefvermerkModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkModalComponent> | undefined;
  title: string = ''
  pruefvermerkForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<PruefvermerkModalComponent>) {
    this.pruefvermerkForm = this._formBuilder.group({
      id: [],
      kategorie: [],
      item: [],
      description: []
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
