import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Peilung } from 'src/app/core/model/peilung.model';
import { Tank } from 'src/app/core/model/tank.model';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

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

  constructor(private _formBuilder: FormBuilder, private _specFacade: SpecFacade, private modalService: ModalService<PeilungModalComponent>, private appService: AppService) {
    this.tanks$ = this._specFacade.tanks$

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
    this._specFacade.ship$.subscribe(ship => {
      this.peilungForm.patchValue({ id_schiff: ship.id })
    })
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.peilungForm.patchValue({ date: data.data.date })
    })
  }

  setDate() {
    this.peilungForm.patchValue({ date: getLocalISO('now') })
    this.peilungForm.markAsDirty()
  }

  selectTank(id_tank: string) {
    this.peilungForm.controls.id_tank.setValue(id_tank)
    this._specFacade.getTankById(id_tank).subscribe(tank => {
      this.peilungForm.patchValue({ max_vol: tank?.max_vol, bezeichnung: tank?.bezeichnung })
    })
  }

  create() {
    const insert: Peilung = this.peilungForm.value
    this._specFacade.insertPeilung(insert)
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
