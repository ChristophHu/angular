import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Position } from 'src/app/core/model/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass'],
  animations: [
    trigger('slideInRight', [
      state('void', style({ transform: 'translate3d(100%, 0, 0)' })),
      state('*', style({ transform: 'translate3d(0, 0, 0)' })),
      transition('void => false', []),
      transition('void => *', animate('200ms 100ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('slideOutRight', [
      state('*', style({ transform: 'translate3d(0, 0, 0)' })),
      state('void', style({ transform: 'translate3d(100%, 0, 0)' })),
      transition('false => void', []),
      transition('* => void', animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ])
  ] 
})
export class PositionComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PositionComponent> | undefined;
  title: string = ''
  positionForm: FormGroup
  edit: boolean = false

  isVisible: boolean = false
  position: Position = { latitude: 0, longitude: 0 }
  
  constructor(
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
        this.position = data.data.position.location
      } else {
        if (data.data.patrol) {
          this.positionForm.patchValue({ id_streife: data.data.patrol.id, id_ship: data.data.patrol.id_schiff, date: new Date().toISOString() })
        }
      }
    })
  }

  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.positionForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
      this.position = { latitude: position.latitude, longitude: position.longitude }
      this.positionForm.markAsDirty()
    })
  }
  clearLocation() {
    this.positionForm.patchValue({ location: { latitude: 0, longitude: 0 }})
    this.position = { latitude: 0, longitude: 0 }
    this.positionForm.markAsDirty()
  }
  setPosition() {
    this.positionForm.patchValue({ location: this.position })
    this.isVisible = false
    this.positionForm.markAsDirty()
  }

  setDate() {
    this.positionForm.patchValue({ date: getLocalISO('now') })
    this.positionForm.markAsDirty()
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
