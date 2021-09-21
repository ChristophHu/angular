import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-zaehlerstand',
  templateUrl: './zaehlerstand.component.html',
  styleUrls: ['./zaehlerstand.component.sass']
})
export class ZaehlerstandComponent implements OnInit, OnDestroy {
  @ViewChild('modalComponent') modal: | ModalComponent<ZaehlerstandComponent> | undefined;

  title: string = ''

  private zaehlerstandSubscription = new Subscription
  zaehlerstandstypen: Zaehlerstandstyp[] = []

  zaehlerstandForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private modalServiceZ: ModalService<ZaehlerstandComponent>, private appService: AppService) {
    this.zaehlerstandForm = this._formBuilder.group({
      id              : [''],
      id_ship         : [''],
      zaehlerstandstyp: [''],
      date            : [''],
      value           : ['']
    })
  }

  ngOnInit(): void {
    this.modalServiceZ.getData().then((data) => {
      this.title = data.data.title
      this.zaehlerstandForm.patchValue(data.data.zaehlerstand)
    })

    this.zaehlerstandSubscription
      .add(
        this.appService.zaehlerstandstypen.subscribe((data: any) => {
          this.zaehlerstandstypen = data
        })
      )
    this.appService.getPruefvermerke()
  }

  ngOnDestroy(): void {
    this.zaehlerstandSubscription.unsubscribe()
  }

  update() {
    this.appService.updateZaehlerstand(this.zaehlerstandForm.value)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
