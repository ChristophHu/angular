import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp';
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

  zaehlerstaendstypen$: Observable<Zaehlerstandstyp[]>
  schiffe$: Observable<Schiff[]>

  zaehlerstand!: Zaehlerstand
  zaehlerstandForm: FormGroup

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<ZaehlerstandComponent>, private zaehlerstaendeService: ZaehlerstaendeService) {
    this.zaehlerstaendstypen$ = this.zaehlerstaendeService.zaehlerstandstypen
    this.schiffe$ = this.zaehlerstaendeService.schiffe

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

    this.zaehlerstaendeService.getSchiffe()
    this.zaehlerstaendeService.getZaehlerstandstypen()
  }

  create() {
    this.zaehlerstaendeService.insertZaehlerstand(this.zaehlerstandForm.value)
    this.modal?.close()
  }

  update() {
    this.zaehlerstaendeService.updateZaehlerstand(this.zaehlerstandForm.value)
    this.modal?.close()
  }

  delete() {
    // this.zaehlerstaendeService.deleteZaehlerstand(this.zaehlerstandForm.value.id)
    // this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
