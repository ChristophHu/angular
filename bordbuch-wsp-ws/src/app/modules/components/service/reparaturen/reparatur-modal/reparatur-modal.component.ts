import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk.model';
import { Status } from 'src/app/core/models/reparatur-status.model';
import { Reparatur } from 'src/app/core/models/reparatur.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-reparatur-modal',
  templateUrl: './reparatur-modal.component.html',
  styleUrls: ['./reparatur-modal.component.sass']
})
export class ReparaturModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ReparaturModalComponent> | undefined;
  title: string = ''
  reparaturForm: FormGroup

  // image-slider
  showGalerie: boolean = false
  images: any[] = []

  schiffe$: Observable<Schiff[]>
  pruefvermerkkategorien$: Observable<Kat[]>
  items$!: Observable<Pruefvermerk[]>
  status$: Observable<Status[]>
  reparaturfotos$: Observable<any[]>
  reparaturFotoCount$: Observable<number>

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<ReparaturModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.pruefvermerkkategorien$ = _katFacade.pruefvermerkkategorien$
    this.status$ = _katFacade.status$
    this.schiffe$ = _katFacade.schiffe$
    // this.reparaturfotos$ = this._specFacade.allReparaturFotos$
    this.reparaturFotoCount$ = _specFacade.allReparaturFotoCount$

    this.reparaturForm = this._formBuilder.group({
      id: [],
      id_ship: [],
      id_status: [],
      name: [],
      date: [],
      kategorie: [],
      item: [],
      description: [],
      status: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title

      this.reparaturForm.patchValue({ date: data.data.date })
      this.reparaturForm.patchValue(data.data.reparatur)

      
      if (data.data.reparatur) {
        this.selectKategorie(data.data.reparatur.kategorie)
        this.selectStatus(data.data.reparatur.status)

        this._specFacade.getReparaturFotosById(data.data.reparatur.id).subscribe(fotos => {
          console.log(`returned fotos: ${fotos}`)
          this.images = []
          if (fotos && fotos.length > 0) this.decodeImages(fotos)
        })
        this._specFacade.downloadReparaturFotos(data.data.reparatur.id)
      }
    })
  }

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe(id => this.reparaturForm.patchValue({ id_ship: id }))
  }
  selectKategorie(kategorie: string) {
    this.items$ = this._katFacade.getItemByKategorie(kategorie)
  }
  selectStatus(status: string) {
    this._katFacade.getIdByStatus(status).subscribe(id => {
      this.reparaturForm.patchValue({ id_status: id })
    })
  }
  setDate() {
    this.reparaturForm.patchValue({ date: new Date().toISOString() })
  }

  decodeImages(data: any[]) {
    data.forEach(el => {
      // this.images.push(el)
      this.images.push(Object.assign({}, { path: el.foto }))
    })
  }

  uploadImage(imageBase64: string) {
    const upload: { id?: string, id_reparatur: string, foto: string } = { id_reparatur: this.reparaturForm.value.id, foto: imageBase64 }
    this._specFacade.uploadReparaturFoto(upload)
  }

  create() {
    const insert: Reparatur = this.reparaturForm.value
    console.log(insert)
    this._specFacade.insertReparatur(insert)
    this.modal?.close()
  }
  update() {
    let update: Reparatur = this.reparaturForm.value
    console.log(update)
    this._specFacade.updateReparatur(update)
    this.modal?.close()
  }
  delete() {
    this._specFacade.deleteReparatur(this.reparaturForm.value.id)
    this.modal?.close()
  }
  deleteFoto(id: string) {
    this._specFacade.deleteReparaturFoto(id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
