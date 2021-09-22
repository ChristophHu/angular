import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass']
})
export class PositionComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PositionComponent> | undefined;
  title: string = ''
  positionForm: FormGroup
  edit: boolean = false
  
  constructor(private _formBuilder: FormBuilder, private modalService: ModalService<PositionComponent>, private appService: AppService) {
    this.positionForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      id_ship: [],
      date: [],
      location: [],
      description: []
    })
  }

  get form() {
		return this.positionForm.controls
	}

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.positionForm.patchValue(data.data.position)
    })
  }

  update() {
    this.appService.updatePosition()
  }

  delete() {
    this.appService.deletePosition(this.form.id.value)
  }

  cancel() {
    this.modal?.close()
  }
}
