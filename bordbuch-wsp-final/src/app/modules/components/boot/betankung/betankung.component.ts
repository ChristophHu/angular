import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-betankung',
  templateUrl: './betankung.component.html',
  styleUrls: ['./betankung.component.sass']
})
export class BetankungComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BetankungComponent> | undefined;
  title: string = ''
  betankungForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder, private modalService: ModalService<BetankungComponent>, private appService: AppService) {
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
    this.modalService.getData().then((data: any) => {
      this.title = data.data.title
      this.betankungForm.patchValue(data.data)
    })
  }

  create() {
    // this.appService.insertBetankung(this.betankungForm.value)
    // this.modal?.close()
  }

  update() {
    // this.appService.updateBetankung(this.betankungForm.value)
    // this.modal?.close()
  }

  delete() {
    // this.appService.deleteBetankung(this.betankungForm.value.id)
    // this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
