import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tank } from 'src/app/core/models/tank.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { Animations } from 'src/app/shared/animations'

@Component({
  selector: 'app-tank-modal',
  templateUrl: './tank-modal.component.html',
  styleUrls: ['./tank-modal.component.sass'],
  animations   : Animations
})
export class TankModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<TankModalComponent> | undefined;
  title: string = ''
  tankTabForm: FormGroup
  tankForm: FormGroup

  show: boolean = false

  tanks$: Observable<Tank[]>

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<TankModalComponent>, private _specFacade: SpecFacade) {
    this.tanks$ = _specFacade.allTanks$

    this.tankTabForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      name: []
    })

    this.tankForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      schiffsname: [],
      bezeichnung: [],
      kraftstoff: [],
      max_vol: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.tankTabForm.patchValue({ id_schiff: data.data.schiff.id, name: data.data.schiff.name })
      this.tankForm.patchValue({ id_schiff: data.data.schiff.id, schiffsname: data.data.schiff.name })
      this.tanks$ = this._specFacade.getTankByIDShip(data.data.schiff.id) as Observable<Tank[]>
    })
  }

  loadTank(tank: Tank) {
    this.tankForm.patchValue(tank)
    this.show = !this.show
  }
  newTank() {
    this.tankForm.patchValue({ id: '', bezeichnung: '', kraftstoff: '', max_vol: ''})
    this.show = !this.show
  }

  create() {
    const insert: Tank = this.tankForm.value
    this._specFacade.insertTank(insert)
    this.modal?.close()
  }
  update() {
    let update: Tank = this.tankForm.value
    this._specFacade.updateTank(update)
    this.modal?.close()
  }
  delete() {
    this._specFacade.deleteTank(this.tankForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
