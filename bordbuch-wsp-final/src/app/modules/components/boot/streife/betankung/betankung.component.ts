import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Betankung } from 'src/app/core/model/betankung';
import { Betriebsstoff } from 'src/app/core/model/Betriebsstoff.model';
import { Position } from 'src/app/core/model/position';
import { AppService } from 'src/app/core/services/app.service';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatSelectors } from 'src/app/store/kat-store';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { ShipAction, ShipState } from 'src/app/store/ship-store';

@Component({
  selector: 'app-betankung',
  templateUrl: './betankung.component.html',
  styleUrls: ['./betankung.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BetankungComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BetankungComponent> | undefined;
  title: string = ''
  betankungForm: FormGroup
  location!: Position
  
  betriebsstoffe$: Observable<Betriebsstoff[]>

  constructor(
    private _formBuilder: FormBuilder, 
    private store: Store<ShipState.State>, 
    private modalService: ModalService<BetankungComponent>, 
    private locationService: LocationService,
    private _katFacade: KatFacade) {
      // this.betriebsstoffe$ = this._katFacade.betriebsstoffe$
      this.betriebsstoffe$ = this.store.pipe(select(KatSelectors.selectAllBetriebsstoffe)) as Observable<Betriebsstoff[]>
      this.store.pipe(select(KatSelectors.selectAllBetriebsstoffe)).subscribe(data => console.log(data))
      this.betankungForm = this._formBuilder.group({
        id: [],
        id_ship: [],
        date: [],
        location: this._formBuilder.group({
          latitude: [],
          longitude: []
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
    this.betankungForm.patchValue({ date: new Date().toISOString().substring(0,16) })
  }
  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.betankungForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
    })
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
