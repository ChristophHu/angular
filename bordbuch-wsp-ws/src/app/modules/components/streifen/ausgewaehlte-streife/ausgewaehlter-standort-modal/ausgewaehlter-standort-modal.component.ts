import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Standort } from 'src/app/core/models/standort.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-ausgewaehlter-standort-modal',
  templateUrl: './ausgewaehlter-standort-modal.component.html',
  styleUrls: ['./ausgewaehlter-standort-modal.component.sass']
})
export class AusgewaehlterStandortModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<AusgewaehlterStandortModalComponent> | undefined;
  title: string = ''
  standortForm: FormGroup
  
  schiffe$ : Observable<Schiff[]>

  constructor(private _formBuilder: FormBuilder, private _katFacade: KatFacade, private _specFacade: SpecFacade , private _modalService: ModalService<AusgewaehlterStandortModalComponent>) {
    this.schiffe$ = this._katFacade.schiffe$
    
    this.standortForm = this._formBuilder.group({
      id          : [],
      id_ship     : [],
      id_streife  : [],
      date        : [],
      location: this._formBuilder.group({
        latitude: [],
        longitude: []
      }),
      description : [],
      name        : []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.standortForm.patchValue(data.data.standort)
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => this.standortForm.patchValue({ id_ship: id }))
  }

  update() {
    let update: Standort = this.standortForm.value
    this._specFacade.updateStandort(update)
    console.log(update)
    this.modal?.close()
  }
  delete() {
    console.log(`delete: ${this.standortForm.value.id}`)
    this._specFacade.deleteStandort(this.standortForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

}
