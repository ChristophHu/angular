import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction } from 'src/app/store/ship-store';
import { ZaehlerstandAction } from 'src/app/store/zaehlerstand-store';

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
    console.log(this.zaehlerstandForm.value)
    const update: Update<Zaehlerstand> = {
      id: this.zaehlerstandForm.value.id,
      changes: this.zaehlerstandForm.value
    }
    this.store.dispatch(ZaehlerstandAction.dataUpdate({ update }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
