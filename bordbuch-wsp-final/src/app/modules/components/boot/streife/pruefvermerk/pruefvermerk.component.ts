import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PruefvermerkKategorien } from 'src/app/core/model/pruefvermerk-kategorie.model';
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model';
import { Reparatur } from 'src/app/core/model/reparatur';
import { Status } from 'src/app/core/model/status';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store';
import { KatSelectors } from 'src/app/store/kat-store';
import { ShipAction } from 'src/app/store/ship-store';

@Component({
  selector: 'app-pruefvermerk',
  templateUrl: './pruefvermerk.component.html',
  styleUrls: ['./pruefvermerk.component.sass']
})
export class PruefvermerkComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkComponent> | undefined;

  title: string = ''

  pruefvermerke$!: Observable<Pruefvermerk[] | undefined>
  kategorien$!: Observable<PruefvermerkKategorien[]>

  pruefvermerkForm: FormGroup

  constructor(
    private store: Store<RootStoreState>, 
    private _formBuilder: FormBuilder,
    private modalServiceP: ModalService<PruefvermerkComponent>, private appService: AppService) {
    // this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerke)) as Observable<Pruefvermerk[]>

    this.kategorien$ = this.store.pipe(select(KatSelectors.selectpruefvermerkkategorien)) as Observable<PruefvermerkKategorien[]>
    
    this.pruefvermerkForm = this._formBuilder.group({
      id        : [''],
      id_ship   : [''],
      date      : ['', Validators.required],
      kategorie : [''],
      item      : [''],
      description: [''],
      status    : [Status.nicht_bearbeitet]
    })
  }

  ngOnInit(): void {
    this.modalServiceP.getData().then((data) => {
      this.title = data.data.title
      this.pruefvermerkForm.patchValue(data.data)
    })
  }

  selectKategorie(kategorie: string) {
    this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerkeByKategorie(kategorie))) as Observable<Pruefvermerk[] | undefined>
  }

  onChange($event: Pruefvermerk) {
    this.pruefvermerkForm.controls.kategorie.setValue($event.kategorie)
  }

  create() {
    const insert: Reparatur = this.pruefvermerkForm.value
    this.store.dispatch(ShipAction.insertReparatur({ insert }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
