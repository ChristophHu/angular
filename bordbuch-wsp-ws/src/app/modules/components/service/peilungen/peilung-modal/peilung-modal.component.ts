import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Peilung } from 'src/app/core/models/peilung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Tank } from 'src/app/core/models/tank.model';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
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

  betriebsstoffe$: Observable<Kat[]>
  schiffe$: Observable<Schiff[]>
  tank$: Observable<Tank[]>

  constructor(
    private _formBuilder: FormBuilder, 
    private _modalService: ModalService<PeilungModalComponent>, 
    private _katFacade: KatFacade, 
    private _specFacade: SpecFacade
  ) {
    this.betriebsstoffe$ = _katFacade.betriebsstoffe$
    this.schiffe$ = this._katFacade.schiffe$
    this.tank$ = this._specFacade.allTanks$


    this.peilungForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      id_tank: [],
      max_vol: [],
      vol: [],
      bezeichnung: [],
      date: [],
      schiffsname: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title

      if(data.data) {
        this.peilungForm.patchValue({ date: data.data.date })
        this.peilungForm.patchValue(data.data.peilung)
  
        this.tank$ = this._specFacade.getTankByIDShip(data.data.peilung.id_schiff) as Observable<Tank[]>
      }
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe((id: any) => this.peilungForm.patchValue({ id_schiff: id }))
  }
  selectTank(bezeichnung: string) {
    this._specFacade.getIdByTank(bezeichnung).subscribe((id: any) => {
      this.peilungForm.patchValue({ id_tank: id })
    })
  }

  setDate() {
    this.peilungForm.patchValue({ date: getLocalISO('now') })
    this.peilungForm.markAsDirty()
  }

  create() {
    const insert: Peilung = this.peilungForm.value
    this._specFacade.insertPeilung(insert)
    this.modal?.close()
  }
  update() {
    let update: Peilung = this.peilungForm.value
    this._specFacade.updatePeilung(update)
    this.modal?.close()
  }
  delete() {
    this._specFacade.deletePeilung(this.peilungForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
