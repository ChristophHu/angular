import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Funktion } from 'src/app/core/model/funktion.model';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { dateToLocalISOString, getLocalISO, isNumber } from 'src/app/shared/utils';
import { KatSelectors } from 'src/app/store/kat-store';
import { ShipAction, ShipState } from 'src/app/store/ship-store';

@Component({
  selector: 'app-besatzung',
  templateUrl: './besatzung.component.html',
  styleUrls: ['./besatzung.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BesatzungComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BesatzungComponent> | undefined;
  title: string = ''
  besatzungForm: FormGroup
  edit: boolean = false
  
  funktionen$: Observable<Funktion[]>
  namen$!: Observable<any>

  constructor(private _formBuilder: FormBuilder, private store: Store<ShipState.State>, private modalService: ModalService<BesatzungComponent>, private appService: AppService) {
    this.funktionen$ = this.store.pipe(select(KatSelectors.selectAllFunktionen)) as Observable<Funktion[]>
    this.besatzungForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      funktion: [],
      persnr: [],
      name: [],
      an_bord: [''],
      von_bord: [''],
      search: []
    })
  }

  get form() {
		return this.besatzungForm.controls
	}

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title   
      console.log(data.data.besatzung)   
      this.besatzungForm.patchValue(data.data.besatzung)
      console.log(this.besatzungForm.value)
      // this.besatzungForm.value.an_bord = data.data.besatzung.an_bord
    })
  }

  setAnBordDate() {
    this.besatzungForm.patchValue({ an_bord: getLocalISO('now') })
    // this.besatzungForm.patchValue({ an_bord: new Date().toISOString().substring(0,16) })
    this.besatzungForm.dirty
  }
  setVonBordDate() {
    this.besatzungForm.patchValue({ von_bord: getLocalISO('now') })
    // this.besatzungForm.patchValue({ von_bord: new Date().toISOString().substring(0,16) })
    this.besatzungForm.dirty
  }

  searchUser(e: any) {
    console.log(e.target.value)
    if (isNumber(e.target.value.length) && e.target.value.length > 5 && e.target.value.length < 9) {
      this.namen$ = this.appService.getSearchUser(e.target.value)
      this.appService.getSearchUser(e.target.value).subscribe((data: any) => {
        console.log(data)
      })
    }
    if (!isNumber(e.target.value) && e.target.value.length > 5) {
      this.namen$ = this.appService.getSearchUser(e.target.value)
      this.appService.getSearchUser(e.target.value).subscribe((data: any) => {
        console.log(data)
      })
    }
  }

  create() {
    const insert: Besatzung = this.besatzungForm.value
    console.log(insert)
    this.store.dispatch(ShipAction.insertPatrolBesatzung({ insert }))
    this.modal?.close()
  }

  update() {
    const update: Update<Besatzung> = {
      id: this.besatzungForm.value.id_streife,
      changes: this.besatzungForm.value 
    }
    this.store.dispatch(ShipAction.updatePatrolBesatzung({ update }))
    this.modal?.close()
  }

  delete(id: string) {
    this.store.dispatch(ShipAction.deletePatrolBesatzung({ id }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
