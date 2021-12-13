import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-kat-pruefvermerkkategorie-modal',
  templateUrl: './kat-pruefvermerkkategorie-modal.component.html',
  styleUrls: ['./kat-pruefvermerkkategorie-modal.component.sass']
})
export class KatPruefvermerkkategorieModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatPruefvermerkkategorieModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<KatPruefvermerkkategorieModalComponent>) {
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
