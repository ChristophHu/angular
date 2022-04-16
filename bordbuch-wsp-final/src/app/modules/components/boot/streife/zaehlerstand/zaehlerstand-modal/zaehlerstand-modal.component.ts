import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-zaehlerstand-modal',
  templateUrl: './zaehlerstand-modal.component.html',
  styleUrls: ['./zaehlerstand-modal.component.sass']
})
export class ZaehlerstandModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ZaehlerstandModalComponent> | undefined;

  title: string = ''
  zaehlerstandForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private modalServiceZ: ModalService<ZaehlerstandModalComponent>, private _specFacade: SpecFacade, private _katFacade: KatFacade) {
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

  selectZaehlerstandstyp(zaehlerstandstyp: string) {
    this._katFacade.getIdByZaehlerstandstyp(zaehlerstandstyp).subscribe(id => this.zaehlerstandForm.patchValue({ id_zaehlerstandstyp: id }))
  }

  setDate() {
    this.zaehlerstandForm.patchValue({ date: getLocalISO('now') })
    this.zaehlerstandForm.markAsDirty()
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
