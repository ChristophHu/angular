import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Funktion } from 'src/app/core/model/funktion.model';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO, isNumber } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-besatzung-modal',
  templateUrl: './besatzung-modal.component.html',
  styleUrls: ['./besatzung-modal.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class BesatzungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BesatzungModalComponent> | undefined;
  title: string = ''
  besatzungForm: FormGroup
  edit: boolean = false
  
  funktionen$: Observable<Funktion[]>
  namen$!: Observable<any>

  constructor(private _formBuilder: FormBuilder, private _specFacade: SpecFacade, private _katFacade: KatFacade, private modalService: ModalService<BesatzungModalComponent>, private appService: AppService) {
    this.funktionen$ = this._katFacade.funktionen$
    this.besatzungForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      funktion: [],
      persnr: [],
      name: [],
      an_bord: [],
      von_bord: [],
      search: []
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

  setAnBordDate() {
    this.besatzungForm.patchValue({ an_bord: getLocalISO('now') })
    this.besatzungForm.markAsDirty()
  }
  setVonBordDate() {
    this.besatzungForm.patchValue({ von_bord: getLocalISO('now') })
    this.besatzungForm.markAsDirty()
  }

  searchUser(e: any) {
    if (isNumber(e.target.value.length) && e.target.value.length > 5 && e.target.value.length < 9) {
      this.namen$ = this.appService.getSearchUser(e.target.value)
    }
    if (!isNumber(e.target.value) && e.target.value.length > 5) {
      this.namen$ = this.appService.getSearchUser(e.target.value)
    }
  }

  create() {
    const insert: Besatzung = this.besatzungForm.value
    this._specFacade.insertBesatzung(insert)
    this.modal?.close()
  }

  update() {
    const update: Besatzung = this.besatzungForm.value
    this._specFacade.updateBesatzung(update)
    this.modal?.close()
  }

  delete(id: string) {
    this._specFacade.deleteBesatzung(id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
