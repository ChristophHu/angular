import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-ausgewaehlte-streifen-modal',
  templateUrl: './ausgewaehlte-streifen-modal.component.html',
  styleUrls: ['./ausgewaehlte-streifen-modal.component.sass']
})
export class AusgewaehlteStreifenModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<AusgewaehlteStreifenModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup

  besatzung: any[] = [{"id":"3e2627ea-b5b0-4498-896c-6b30b5c347b4","id_streife":"479e0f30-c26e-47ed-8c6a-eb22169a6092","persnr":"147","funktion":"StF","an_bord":"","von_bord":"2021-09-20 16:01:00.000"},{"id":"f85adb7d-e1e1-40e8-8755-71aad8b04822","id_streife":"479e0f30-c26e-47ed-8c6a-eb22169a6092","persnr":"123","funktion":"STBB","an_bord":"","von_bord":"2021-09-20 16:01:00.000"}]
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<AusgewaehlteStreifenModalComponent>) {
    this.katForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      schiffsname: [],
      kennung: [],
      zweck: [],
      status: [],
      besatzung: []
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
