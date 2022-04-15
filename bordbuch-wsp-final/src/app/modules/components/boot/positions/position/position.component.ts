import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { RootStoreState } from 'src/app/store/root-store.state';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass']
})
export class PositionComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PositionComponent> | undefined;
  title: string = ''
  positionForm: FormGroup
  edit: boolean = false
  
  constructor(
    private store: Store<RootStoreState>, 
    private _specFacade: SpecFacade,
    private _formBuilder: FormBuilder,
    private locationService: LocationService,
    private modalService: ModalService<PositionComponent>
  ) {
    this.positionForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      id_ship: [],
      date: [],
      location: this._formBuilder.group({
        latitude: [0],
        longitude: [0]
      }),
      ort: [],
      description: []
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      if (data.data.position) {
        this.positionForm.patchValue(data.data.position)
      } else {
        if (data.data.patrol) {
          this.positionForm.patchValue({ id_streife: data.data.patrol.id, id_ship: data.data.patrol.id_schiff })
        }
      }
    })
  }

  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.positionForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
    })
  }
  clearLocation() {
    this.positionForm.patchValue({ location: { latitude: 0, longitude: 0 }})
    this.positionForm.dirty
  }

  setDate() {
    this.positionForm.patchValue({ date: getLocalISO('now') })
    this.positionForm.dirty
  }

  create() {
    const insert = this.positionForm.value
    this._specFacade.insertPosition(insert)
    this.modal?.close()
  }

  update() {
    const update: PositionReport = this.positionForm.value
    this._specFacade.updatePosition(update)
    this.modal?.close()
  }

  delete() {
    const id = this.positionForm.value.id
    this._specFacade.deletePosition(id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
