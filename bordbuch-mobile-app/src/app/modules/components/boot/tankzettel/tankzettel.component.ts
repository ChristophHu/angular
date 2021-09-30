import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-tankzettel',
  templateUrl: './tankzettel.component.html',
  styleUrls: ['./tankzettel.component.sass']
})
export class TankzettelComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<TankzettelComponent> | undefined;
  title: string = ''
  betankungForm: FormGroup
  edit: boolean = false
  
  constructor(private _formBuilder: FormBuilder, private modalService: ModalService<TankzettelComponent>, private appService: AppService) {
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
      this.betankungForm.patchValue(data.data.position)
    })
  }

  create() {
    this.appService.insertPosition(this.betankungForm.value)
    this.modal?.close()
  }

  update() {
    this.appService.updatePosition(this.betankungForm.value)
    this.modal?.close()
  }

  delete() {
    this.appService.deletePosition(this.betankungForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
