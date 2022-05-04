import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Betankung } from 'src/app/core/models/betankung';
import { Kat } from 'src/app/core/models/kat.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-betankung-modal',
  templateUrl: './betankung-modal.component.html',
  styleUrls: ['./betankung-modal.component.sass']
})
export class BetankungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BetankungModalComponent> | undefined;
  title: string = ''
  betankungForm: FormGroup

  betriebsstoffe$: Observable<Kat[]>
  schiffe$: Observable<Schiff[]>

  constructor(
    private _formBuilder: FormBuilder, 
    private locationService: LocationService,
    private _modalService: ModalService<BetankungModalComponent>, 
    private _katFacade: KatFacade, 
    private _specFacade: SpecFacade
  ) {
    this.betriebsstoffe$ = _katFacade.betriebsstoffe$
    this.schiffe$ = _katFacade.schiffe$

    this.betankungForm = this._formBuilder.group({
      id: [],
      id_ship: [],
      name: [],
      date: [],
      location: this._formBuilder.group({
        latitude: [0],
        longitude: [0]
      }),
      ort: [],
      fuel: [],
      fuelfillingquantity: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title

      this.betankungForm.patchValue({ date: data.data.date })
      this.betankungForm.patchValue(data.data.betankung)
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe((id: any) => this.betankungForm.patchValue({ id_ship: id }))
  }
  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.betankungForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
    })
  }
  clearLocation() {
    this.betankungForm.patchValue({ location: { latitude: 0, longitude: 0 }})
  }

  setDate() {
    this.betankungForm.patchValue({ date: getLocalISO('now') })
    this.betankungForm.markAsDirty()
  }

  create() {
    const insert: Betankung = this.betankungForm.value
    this._specFacade.insertBetankung(insert)
    this.modal?.close()
  }
  update() {
    let update: Betankung = this.betankungForm.value
    this._specFacade.updateBetankung(update)
    this.modal?.close()
  }
  delete() {
    this._specFacade.deleteBetankung(this.betankungForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
