import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PruefvermerkKategorien } from 'src/app/core/model/pruefvermerk-kategorie.model';
import { Pruefvermerk } from 'src/app/core/model/pruefvermerk.model';
import { Reparatur } from 'src/app/core/model/reparatur';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store/root-store.state';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { Status } from 'src/app/core/model/reparatur-status.model';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

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
    private _specFacade: SpecFacade,
    private modalService: ModalService<PruefvermerkModalComponent>,
    private _katFacade: KatFacade
    ) {
    // this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerke)) as Observable<Pruefvermerk[]>

    this.kategorien$ = this._katFacade.pruefvermerkskategorien$
    this.status$ = this._katFacade.status$
    
    this.reparaturfotos$ = this._specFacade.reparaturfotos$
    this.reparaturFotoCount$ = this._specFacade.reparaturfotoscount$

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

        this._specFacade.getReparaturFotosById(data.data.reparatur.id).subscribe(fotos => {
          console.log(`returned fotos: ${fotos}`)
          this.images = []
          if (fotos && fotos.length > 0) this.decodeImages(fotos)
        })
        console.log(this.id)
        this._specFacade.downloadReparaturFotos(this.id)
      }

      this._specFacade.reparaturfotos$.subscribe(data => console.log(data))
    })
  }

  selectKategorie(kategorie: string) {
    this.pruefvermerke$ = this._katFacade.getPruefvermerkByKategorie(kategorie)
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
    this.pruefvermerkForm.patchValue({ date: getLocalISO('now') })
    this.pruefvermerkForm.dirty
  }

  decodeImages(data: any[]) {
    data.forEach(el => {
      this.images.push(Object.assign({}, { path: el.foto }))
    })
  }
  uploadImage(imageBase64: string) {
    const upload: { id?: string, id_reparatur: string, foto: string } = { id_reparatur: this.pruefvermerkForm.value.id, foto: imageBase64 }
    console.log(upload)
    this._specFacade.uploadReparaturFoto(upload)
  }

  deleteFoto(id: string) {
    this._specFacade.deleteReparaturFoto(id)
  }

  create() {
    const insert: Reparatur = this.pruefvermerkForm.value
    this._specFacade.insertReparatur(insert)
    this.modal?.close()
  }
  update() {
    let update: Reparatur = this.pruefvermerkForm.value
    this._specFacade.updateReparatur(update)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
