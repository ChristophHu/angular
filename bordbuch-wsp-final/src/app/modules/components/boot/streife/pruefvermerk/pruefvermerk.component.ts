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
import { RootStoreState } from 'src/app/store/root-store.state';
import { KatSelectors } from 'src/app/store/kat-store';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';

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

  reparaturfotos$: Observable<any[]>
  reparaturFotoCount$: Observable<number>

  // image-slider
  showGalerie: boolean = false
  images: any[] = []

  constructor(
    private store: Store<RootStoreState>, 
    private _formBuilder: FormBuilder,
    private modalServiceP: ModalService<PruefvermerkComponent>,
    // private _specFacade: SpecFacade,
    private appService: AppService) {
    // this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerke)) as Observable<Pruefvermerk[]>

    this.kategorien$ = this.store.pipe(select(KatSelectors.selectpruefvermerkkategorien)) as Observable<PruefvermerkKategorien[]>
    // this.reparaturfotos$ = _specFacade.allReparaturFotos$
    // this.reparaturFotoCount$ = _specFacade.allReparaturFotoCount$
    
    this.reparaturfotos$ = this.store.pipe(select(ShipSelectors.selectAllReparaturFotos)) as Observable<any[]>
    this.reparaturFotoCount$ = this.store.pipe(select(ShipSelectors.selectReparaturFotosCount)) as Observable<any>

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
  setDate() {
    this.pruefvermerkForm.patchValue({ date: new Date().toISOString().substring(0,16) })
  }

  uploadImage(imageBase64: string) {
    const upload: { id?: string, id_reparatur: string, foto: string } = { id_reparatur: this.pruefvermerkForm.value.id, foto: imageBase64 }
    console.log(upload)
    // this._specFacade.uploadReparaturFoto(upload)
    this.store.dispatch(ShipAction.uploadReparaturFoto({ upload }))
  }

  deleteFoto(id: string) {
    // this._specFacade.deleteReparaturFoto(id)
    this.store.dispatch(ShipAction.deleteReparaturFoto({ id }))
    this.modal?.close()
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
