import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipAction, ShipState } from 'src/app/store/ship-store';
import { Peilung } from '../peilung.component';

@Component({
  selector: 'app-peilung-modal',
  templateUrl: './peilung-modal.component.html',
  styleUrls: ['./peilung-modal.component.sass']
})
export class PeilungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PeilungModalComponent> | undefined;
  title: string = ''
  peilungForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private store: Store<ShipState.State>, private modalService: ModalService<PeilungModalComponent>, private appService: AppService) {
    this.peilungForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      tank: [],
      date: [],
      menge: []
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.peilungForm.patchValue(data.data.peilung)

      console.log(data)
    })
  }

  update() {
    // const update: Update<Peilung> = {
    //   id: this.peilungForm.value.id,
    //   changes: this.peilungForm.value 
    // }
    const peilung: Peilung = this.peilungForm.value
    console.log(peilung)
    this.store.dispatch(ShipAction.updatePeilung({ peilung }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
