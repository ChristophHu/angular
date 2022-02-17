import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PruefvermerkKategorien } from 'src/app/core/model/pruefvermerk-kategorie.model';
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model';
import { Reparatur } from 'src/app/core/model/reparatur';

import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store/root-store.state';
import { KatSelectors } from 'src/app/store/kat-store';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { Status } from 'src/app/core/model/reparatur-status.model';

@Component({
  selector: 'app-pruefvermerk',
  templateUrl: './pruefvermerk-modal.component.html',
  styleUrls: ['./pruefvermerk-modal.component.sass']
})
export class PruefvermerkModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkModalComponent> | undefined;

  title: string = ''

  pruefvermerke$!: Observable<Pruefvermerk[] | undefined>
  kategorien$!: Observable<PruefvermerkKategorien[]>
  status$!: Observable<Status[]>

  pruefvermerkForm: FormGroup

  reparaturfotos$: Observable<any[]>
  reparaturFotoCount$: Observable<number>

  // image-slider
  showGalerie: boolean = false
  images: any[] = []
  id: string = ''

  constructor(
    private store: Store<RootStoreState>, 
    private _formBuilder: FormBuilder,
    private modalService: ModalService<PruefvermerkModalComponent>,
    private _katFacade: KatFacade
    ) {
    // this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerke)) as Observable<Pruefvermerk[]>

    this.kategorien$ = this.store.pipe(select(KatSelectors.selectpruefvermerkkategorien)) as Observable<PruefvermerkKategorien[]>
    this.status$ = this._katFacade.status$
    
    this.reparaturfotos$ = this.store.pipe(select(ShipSelectors.selectAllReparaturFotos)) as Observable<any[]>
    this.reparaturFotoCount$ = this.store.pipe(select(ShipSelectors.selectReparaturFotosCount)) as Observable<any>

    this.pruefvermerkForm = this._formBuilder.group({
      id        : [''],
      id_ship   : [''],
      id_status : [''],
      date      : ['', Validators.required],
      kategorie : [''],
      item      : [''],
      description: [''],
      status    : []
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title

      this.pruefvermerkForm.patchValue({ id_ship: data.data.id_ship, date: data.data.date })
      this.pruefvermerkForm.patchValue(data.data.reparatur)

      if (data.data.reparatur) {
        this.id = data.data.reparatur.id
        this.selectKategorie(data.data.reparatur.kategorie)
        this.selectStatus(data.data.reparatur.status)

        this.store.pipe(select(ShipSelectors.selectReparaturFotosById(data.data.reparatur.id))).subscribe(fotos => {
          console.log(`returned fotos: ${fotos}`)
          this.images = []
          if (fotos && fotos.length > 0) this.decodeImages(fotos)
        })
        console.log(this.id)
        this.store.dispatch(ShipAction.downloadReparaturFotos({ id: this.id }))
      }

      this.store.pipe(select(ShipSelectors.selectAllReparaturFotos)).subscribe(data => console.log(data))
    })
  }

  selectKategorie(kategorie: string) {
    this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerkeByKategorie(kategorie))) as Observable<Pruefvermerk[] | undefined>
  }
  onChange($event: Pruefvermerk) {
    this.pruefvermerkForm.controls.kategorie.setValue($event.kategorie)
  }
  selectStatus(status: string) {
    this._katFacade.getIdByStatus(status).subscribe(id => {
      this.pruefvermerkForm.patchValue({ id_status: id })
    })
  }
  setDate() {
    this.pruefvermerkForm.patchValue({ date: new Date().toISOString().substring(0,16) })
    this.pruefvermerkForm.controls['date'].markAsDirty()
  }

  decodeImages(data: any[]) {
    console.log(data)
    data.forEach(el => {
      this.images.push(Object.assign({}, { path: el.foto }))
    })
  }
  uploadImage(imageBase64: string) {
    const upload: { id?: string, id_reparatur: string, foto: string } = { id_reparatur: this.pruefvermerkForm.value.id, foto: imageBase64 }
    console.log(upload)
    this.store.dispatch(ShipAction.uploadReparaturFoto({ upload }))
  }

  deleteFoto(id: string) {
    this.store.dispatch(ShipAction.deleteReparaturFoto({ id }))
  }

  create() {
    const insert: Reparatur = this.pruefvermerkForm.value
    this.store.dispatch(ShipAction.insertReparatur({ insert }))
    this.modal?.close()
  }
  update() {
    let update: Reparatur = this.pruefvermerkForm.value
    console.log(update)
    this.store.dispatch(ShipAction.updateReparatur({ update }))
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
