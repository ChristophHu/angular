import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Streife } from 'src/app/core/models/streife';
import { StreifeService } from 'src/app/core/services/streife.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-streife',
  templateUrl: './streife.component.html',
  styleUrls: ['./streife.component.sass']
})
export class StreifeComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<StreifeComponent> | undefined;
  title: string = ''

  // streife!: Streife
  streifeForm: FormGroup

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<StreifeComponent>, private streifeService: StreifeService) {
    this.streifeForm = this.formBuilder.group({
      id: [],
      id_schiff: [],
      zweck: [],
      status: [],
      start: [],
      ende: [],
      kennung: []
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data: any) => {
      console.log(data)
      this.title = data.data.title
      this.streifeForm.patchValue(data.data.streife)
    })
  }

  create() {
    // this.zaehlerstaendeService.createBetankung(this.streifeForm.value)
    // this.modal?.close()
  }

  update() {
    this.streifeService.updateStreife(this.streifeForm.value)
    this.modal?.close()
  }

  delete() {
    this.streifeService.deleteStreife(this.streifeForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
