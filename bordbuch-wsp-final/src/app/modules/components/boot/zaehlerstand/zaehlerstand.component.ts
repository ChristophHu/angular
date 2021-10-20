import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
// import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store';
import { ShipAction } from 'src/app/store/ship-store';

@Component({
  selector: 'app-zaehlerstand',
  templateUrl: './zaehlerstand.component.html',
  styleUrls: ['./zaehlerstand.component.sass']
})
export class ZaehlerstandComponent implements OnInit, OnDestroy {
  @ViewChild('modalComponent') modal: | ModalComponent<ZaehlerstandComponent> | undefined;

  title: string = ''

  private zaehlerstandSubscription = new Subscription
  // zaehlerstandstypen: Zaehlerstandstyp[] = []

  zaehlerstandForm: FormGroup

  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder, private modalServiceZ: ModalService<ZaehlerstandComponent>, private appService: AppService) {
    this.zaehlerstandForm = this._formBuilder.group({
      id              : [''],
      id_schiff       : [''],
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
  }

  ngOnDestroy(): void {
    this.zaehlerstandSubscription.unsubscribe()
  }

  update() {
    let zaehlerstand: Zaehlerstand = { id: '0f151cbe-cf1e-4353-870c-9639d9afe4e9', id_ship: '1', zaehlerstandstyp: 'MOTOR1', date: new Date().toISOString(), value: 88 }
    console.log(zaehlerstand)
    // this.appService.updateZaehlerstand(this.zaehlerstandForm.value)
    this.store.dispatch(ShipAction.updateZaehlerstand({ zaehlerstand }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
