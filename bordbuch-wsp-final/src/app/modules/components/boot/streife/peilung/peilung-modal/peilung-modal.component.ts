import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Peilung } from 'src/app/core/model/peilung.model';
import { Tank } from 'src/app/core/model/tank.model';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipAction, ShipSelectors, ShipState } from 'src/app/store/ship-store';

@Component({
  selector: 'app-peilung-modal',
  templateUrl: './peilung-modal.component.html',
  styleUrls: ['./peilung-modal.component.sass']
})
export class PeilungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PeilungModalComponent> | undefined;
  title: string = ''
  peilungForm: FormGroup

  id_ship: string = ''
  tanks$: Observable<Tank[]>

  constructor(private _formBuilder: FormBuilder, private store: Store<ShipState.State>, private modalService: ModalService<PeilungModalComponent>, private appService: AppService) {

    this.tanks$ = this.store.pipe(select(ShipSelectors.selectTanks)) as Observable<Tank[]>

    this.peilungForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      id_tank: [],
      bezeichnung: [],
      max_vol: [],
      vol: [],
      date: [],
      schiffsname: []
    })
  }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectShipId)).subscribe(data => {
      this.peilungForm.patchValue({ id_schiff: data })
    })
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.peilungForm.patchValue({ date: data.data.date })
    })
  }

  setDate() {
    this.peilungForm.patchValue({ date: new Date().toISOString().substring(0,16) })
  }
  show(val: any) {
    console.log(val)
  }

  selectTank(id_tank: string) {
    this.peilungForm.controls.id_tank.setValue(id_tank)
    this.store.pipe(select(ShipSelectors.selectTankById(id_tank))).subscribe(data => {
      this.peilungForm.patchValue({ max_vol: data?.max_vol, bezeichnung: data?.bezeichnung })
      console.log(data)
    })
  }

  create() {
    const insert: Peilung = this.peilungForm.value
    console.log(insert)
    this.store.dispatch(ShipAction.insertPeilung({ insert }))
    this.modal?.close()
  }

  update() {
    // const update: Update<Peilung> = {
    //   id: this.peilungForm.value.id,
    //   changes: this.peilungForm.value 
    // }
    // const peilung: Peilung = this.peilungForm.value
    // console.log(peilung)
    // this.store.dispatch(ShipAction.updatePeilung({ peilung }))
    // this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
