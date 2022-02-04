import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { AppService } from 'src/app/core/services/app.service';
import { LocationService } from 'src/app/core/services/location.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { dateToLocalISOString } from 'src/app/shared/utils';
import { PositionActions } from 'src/app/store/positionreport-store';
import { RootStoreState } from 'src/app/store/root-store.state';

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
        latitude: [],
        longitude: []
      }),
      description: []
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.positionForm.patchValue(data.data.position)
    })
  }

  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.positionForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude }})
    })
  }
  setDate() {
    this.positionForm.patchValue({ date: new Date().toISOString().substring(0,16) })
  }

  create() {
    console.log(this.positionForm.value)
    const positionReport = this.positionForm.value
    this.store.dispatch(PositionActions.insertData({ positionReport }))
    this.modal?.close()
  }

  update() {
    console.log(this.positionForm.value)
    const update: Update<PositionReport> = {
      id: this.positionForm.value.id,
      changes: this.positionForm.value
    }
    this.store.dispatch(PositionActions.updateData({ update }))
    this.modal?.close()
  }

  delete() {
    const id = this.positionForm.value.id
    this.store.dispatch(PositionActions.deleteData({ id }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
