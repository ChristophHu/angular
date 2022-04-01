import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Betankung } from 'src/app/core/model/betankung';
import { Betriebsstoff } from 'src/app/core/model/Betriebsstoff.model';
import { Position } from 'src/app/core/model/position';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatSelectors } from 'src/app/store/kat-store';
import { ShipAction, ShipState } from 'src/app/store/ship-store';

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
    private store: Store<ShipState.State>, 
    private modalService: ModalService<BetankungModalComponent>, 
    private locationService: LocationService) {
      this.betriebsstoffe$ = this.store.pipe(select(KatSelectors.selectAllBetriebsstoffe)) as Observable<Betriebsstoff[]>
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
    this.betankungForm.dirty
  }
  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.betankungForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
    })
  }
  clearLocation() {
    this.betankungForm.patchValue({ location: { latitude: 0, longitude: 0 }})
    this.betankungForm.dirty
  }

  create() {
    const insert: Betankung = this.betankungForm.value
    console.log(insert)
    this.store.dispatch(ShipAction.insertBetankung({ insert }))
    this.modal?.close()
  }

  update() {
    const update: Update<Betankung> = {
      id: this.betankungForm.value.id_streife,
      changes: this.betankungForm.value 
    }
    console.log(update)
    this.store.dispatch(ShipAction.updateBetankung({ update }))
    this.modal?.close()
  }

  delete(id: string) {
    this.store.dispatch(ShipAction.deleteBetankung({ id }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
