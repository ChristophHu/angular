import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Betankung } from 'src/app/core/model/betankung';
import { Betriebsstoff } from 'src/app/core/model/Betriebsstoff.model';
import { Position } from 'src/app/core/model/position';
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
  location!: Position
  
  betriebsstoffe$: Observable<Betriebsstoff[]>

  constructor(
    private _formBuilder: FormBuilder,  
    private _specFacade: SpecFacade,
    private _katFacade: KatFacade,
    private modalService: ModalService<BetankungModalComponent>, 
    private locationService: LocationService) {
      this.betriebsstoffe$ = this._katFacade.betriebsstoffe$
      this.betankungForm = this._formBuilder.group({
        id: [],
        id_ship: [],
        date: [],
        location: this._formBuilder.group({
          latitude: [0],
          longitude: [0]
        }),
        ort: [],
        fuel: [],
        fuelfillingquantity: []
      }
    )
  }

  ngOnInit(): void {
    this.modalService.getData().then((data: any) => {
      this.title = data.data.title
      this.betankungForm.patchValue(data.data)
    })
  }

  setDate() {
    this.betankungForm.patchValue({ date: getLocalISO('now') })
    this.betankungForm.markAsDirty()
  }
  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.betankungForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
    })
  }
  clearLocation() {
    this.betankungForm.patchValue({ location: { latitude: 0, longitude: 0 }})
    this.betankungForm.markAsDirty()
  }

  create() {
    const insert: Betankung = this.betankungForm.value
    this._specFacade.insertBetankung(insert)
    this.modal?.close()
  }

  update() {
    const update: Betankung = this.betankungForm.value
    this._specFacade.updateBetankung(update)
    this.modal?.close()
  }

  delete(id: string) {
    this._specFacade.deleteBetankung(id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
