import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-besatzung',
  templateUrl: './besatzung.component.html',
  styleUrls: ['./besatzung.component.sass']
})
export class BesatzungComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BesatzungComponent> | undefined;
  title: string = ''
  besatzungForm: FormGroup
  edit: boolean = false

  constructor(private _formBuilder: FormBuilder, private modalService: ModalService<BesatzungComponent>, private appService: AppService) {
    this.besatzungForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      funktion: [],
      persnr: [],
      name: [],
      an_bord: [''],
      von_bord: ['']
      // status: [Status.]
    })
  }

  get form() {
		return this.besatzungForm.controls
	}

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      // console.log(data.data.besatzung.id)
      this.edit = data.data.besatzung.id
      // console.log(this.edit)
      this.title = data.data.title
      this.besatzungForm.patchValue(data.data.besatzung)
    })
  }

  create() {
    this.appService.insertBesatzung(this.besatzungForm.value)
    this.modal?.close()
  }

  update() {
    this.appService.updateBesatzung(this.besatzungForm.value)
    this.modal?.close()
  }

  delete() {
    this.appService.deleteBesatzung(this.besatzungForm.value)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

  clear() {
    this.besatzungForm.reset()
  }
}
