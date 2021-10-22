import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Patrol } from 'src/app/core/model/patrol.model';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipState } from 'src/app/store/ship-store';

@Component({
  selector: 'app-besatzung',
  templateUrl: './besatzung.component.html',
  styleUrls: ['./besatzung.component.sass']
})
export class BesatzungComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BesatzungComponent> | undefined;
  title: string = ''
  besatzungForm: FormGroup
  edit: boolean = false

  constructor(private _formBuilder: FormBuilder, private store: Store<ShipState.State>, private modalService: ModalService<BesatzungComponent>, private appService: AppService) {
    this.besatzungForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      funktion: [],
      persnr: [],
      name: [],
      an_bord: [''],
      von_bord: ['']
    })
  }

  get form() {
		return this.besatzungForm.controls
	}

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title      
      this.besatzungForm.patchValue(data.data.besatzung)
    })
  }

  create() {
    this.store.dispatch(ShipAction.insertPatrolBesatzung({}))
    this.modal?.close()
  }

  update() {
    const update: Update<Patrol> = {
      id: this.besatzungForm.value.id_streife,
      changes: { besatzung: this.besatzungForm.value}
    }
    this.store.dispatch(ShipAction.updatePatrolBesatzung({ update }))
    this.modal?.close()
  }

  delete() {
    // this.appService.deleteBesatzung(this.besatzungForm.value)
    // this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
