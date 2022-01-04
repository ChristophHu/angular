import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { Streife } from 'src/app/core/models/streife.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-ausgewaehlte-streifen-modal',
  templateUrl: './ausgewaehlte-streifen-modal.component.html',
  styleUrls: ['./ausgewaehlte-streifen-modal.component.sass']
})
export class AusgewaehlteStreifenModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<AusgewaehlteStreifenModalComponent> | undefined;
  title: string = ''
  streifeForm: FormGroup

  kennungen$: Observable<Kat[]>
  schiffe$ : Observable<Schiff[]>
  status: String[] = ['vorbereitend', 'aktiv', 'beendet']
  zwecke$: Observable<Kat[]>

  besatzung: any[] = [] //[{"id":"3e2627ea-b5b0-4498-896c-6b30b5c347b4","id_streife":"479e0f30-c26e-47ed-8c6a-eb22169a6092","persnr":"147","funktion":"StF","an_bord":"","von_bord":"2021-09-20 16:01:00.000"},{"id":"f85adb7d-e1e1-40e8-8755-71aad8b04822","id_streife":"479e0f30-c26e-47ed-8c6a-eb22169a6092","persnr":"123","funktion":"STBB","an_bord":"","von_bord":"2021-09-20 16:01:00.000"}]
  
  constructor(private _formBuilder: FormBuilder, private _katFacade: KatFacade, private _specFacade: SpecFacade, private _modalService: ModalService<AusgewaehlteStreifenModalComponent>) {
    this.kennungen$ = this._katFacade.kennungen$
    this.schiffe$ = this._katFacade.schiffe$
    this.zwecke$ = this._katFacade.zweck$

    this.streifeForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      schiffsname: [],
      kennung: [],
      zweck: [],
      status: [],
      besatzung: [],
      start: [],
      ende: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      console.log(data.data.streife)
      this.title = data.data.title
      this.streifeForm.patchValue(data.data.streife)
      this.besatzung = data.data.streife.besatzung
      console.log(this.besatzung)

      if (data.data.streife) {
        this.selectShip(data.data.streife.name)
      }
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => this.streifeForm.patchValue({ id_schiff: id }))
  }

  update() {
    let update: Streife = this.streifeForm.value
    this._specFacade.updateStreife(update)
    console.log(update)
    this.modal?.close()
  }
  delete() {
    this._specFacade.deleteStreife(this.streifeForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
