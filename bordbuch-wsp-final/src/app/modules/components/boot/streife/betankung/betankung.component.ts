import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Betankung } from 'src/app/core/model/betankung';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
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
  
  // zweck
  was: any[] = [
    { id: 1, bezeichnung: "Diesel" },
    { id: 2, bezeichnung: "Benzin" },
    { id: 3, bezeichnung: "Motorenoel" }
  ]

  constructor(private _formBuilder: FormBuilder, private store: Store<ShipState.State>, private modalService: ModalService<BetankungComponent>, private appService: AppService) {
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
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data: any) => {
      this.title = data.data.title
      this.betankungForm.patchValue(data.data)
    })
  }

  create() {
    const insert: Betankung = this.betankungForm.value
    console.log(insert)
    this.store.dispatch(ShipAction.insertBetankung({ insert }))
    this.modal?.close()
  }

  update() {
    // this.appService.updateBetankung(this.betankungForm.value)
    // this.modal?.close()
  }

  delete() {
    // this.appService.deleteBetankung(this.betankungForm.value.id)
    // this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
