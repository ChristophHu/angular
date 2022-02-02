import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Standort } from 'src/app/core/models/standort.model';
import { Streife } from 'src/app/core/models/streife.model';
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
  // id_streife: string
  streife$!: Observable<Streife | undefined>

  constructor(private _route: ActivatedRoute, private _formBuilder: FormBuilder, private _katFacade: KatFacade, private _specFacade: SpecFacade , private _modalService: ModalService<AusgewaehlterStandortModalComponent>) {
    // this.id_streife = this._route.snapshot.paramMap.get('id')!
    // console.log(this.id_streife)
    
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
    // if (this.id_streife) {
    //   this._specFacade.getStreifeById(this.id_streife).subscribe(streife => {
    //     console.log(`load streife: ${streife}`)
    //     this.standortForm.patchValue(streife!)
    //   })
    // }

    this._modalService.getData().then((data) => {
      this.title = data.data.title

      if (data.data.standort) {
        this.standortForm.patchValue(data.data.standort)
      } else {
        this.standortForm.patchValue({ id_schiff: data.data.streife.id_schiff, id_streife: data.data.streife.id, name: data.data.streife.schiffsname, date: data.data.date  })
      }      
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => this.standortForm.patchValue({ id_ship: id }))
  }

  create() {
    let insert: Standort = this.standortForm.value
    console.log(`insert Standort ${insert}`)
    this._specFacade.insertStandort(insert)
    this.modal?.close()
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
