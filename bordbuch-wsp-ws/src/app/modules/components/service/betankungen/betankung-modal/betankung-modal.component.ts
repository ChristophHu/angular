import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-betankung-modal',
  templateUrl: './betankung-modal.component.html',
  styleUrls: ['./betankung-modal.component.sass']
})
export class BetankungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BetankungModalComponent> | undefined;
  title: string = ''
  betankungForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<BetankungModalComponent>) {
    this.betankungForm = this._formBuilder.group({
      id: [],
      id_ship: [],
      date: [],
      location: this._formBuilder.group({
        latitude: [],
        longitude: []
      }),
      ort: [],
      fuel: [],
      fuelfillingquantity: []
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
