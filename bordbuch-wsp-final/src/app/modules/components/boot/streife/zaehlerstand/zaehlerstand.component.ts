import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { dateToLocalISOString } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { RootStoreState } from 'src/app/store/root-store.state';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { ZaehlerstandAction } from 'src/app/store/zaehlerstand-store';
import { getLocalISO } from 'src/app/shared/utils';

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

  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder, private modalServiceZ: ModalService<ZaehlerstandComponent>, private _specFacade: SpecFacade, private _katFacade: KatFacade) {
    this.zaehlerstandForm = this._formBuilder.group({
      id              : [''],
      id_schiff       : [''],
      id_zaehlerstandstyp: [],
      zaehlerstandstyp: [''],
      date            : [''],
      value           : [''],
      betriebsstunden : ['']
    })
  }

  ngOnInit(): void {
    this.modalServiceZ.getData().then((data) => {
      this.title = data.data.title
      if (data.data.zaehlerstand) {
        this.zaehlerstandForm.patchValue(data.data.zaehlerstand)
        this.selectZaehlerstandstyp(data.data.zaehlerstand.zaehlerstandstyp)
      }
    })
  }
  ngOnDestroy(): void {
    this.zaehlerstandSubscription.unsubscribe()
  }

  selectZaehlerstandstyp(zaehlerstandstyp: string) {
    this._katFacade.getIdByZaehlerstandstyp(zaehlerstandstyp).subscribe(id => this.zaehlerstandForm.patchValue({ id_zaehlerstandstyp: id }))
  }

  setDate() {
    this.zaehlerstandForm.patchValue({ date: getLocalISO('now') })
    this.zaehlerstandForm.dirty
  }

  // update() {
  //   console.log(this.zaehlerstandForm.value)
  //   const update: Update<Zaehlerstand> = {
  //     id: this.zaehlerstandForm.value.id,
  //     changes: this.zaehlerstandForm.value
  //   }
  //   this.store.dispatch(ZaehlerstandAction.dataUpdate({ update }))
  //   this.modal?.close()
  // }

  update() {
    let update: Zaehlerstand = this.zaehlerstandForm.value
    this._specFacade.updateZaehlerstand(update)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
