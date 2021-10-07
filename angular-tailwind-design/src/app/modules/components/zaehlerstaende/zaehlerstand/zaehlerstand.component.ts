import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand';
import { ZaehlerstaendeService } from 'src/app/core/services/zaehlerstaende.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-zaehlerstand',
  templateUrl: './zaehlerstand.component.html',
  styleUrls: ['./zaehlerstand.component.sass']
})
export class ZaehlerstandComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ZaehlerstandComponent> | undefined;
  title: string = ''

  zaehlerstand!: Zaehlerstand
  zaehlerstandForm: FormGroup

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<ZaehlerstandComponent>, private zaehlerstaendeService: ZaehlerstaendeService) {
    this.zaehlerstandForm = this.formBuilder.group({
      id: [],
      id_schiff: [],
      date: [],
      zaehlerstandstyp: [],
      value: [0]
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data: any) => {
      console.log(data)
      this.title = data.data.title
      this.zaehlerstandForm.patchValue(data.data.zaehlerstand)
    })
  }

  create() {
    // this.zaehlerstaendeService.createBetankung(this.zaehlerstandForm.value)
    // this.modal?.close()
  }

  update() {
    this.zaehlerstaendeService.updateZaehlerstand(this.zaehlerstandForm.value)
    this.modal?.close()
  }

  delete() {
    // this.zaehlerstaendeService.deleteBetankung(this.zaehlerstandForm.value.id)
    // this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
