import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-pruefvermerk-modal',
  templateUrl: './pruefvermerk-modal.component.html',
  styleUrls: ['./pruefvermerk-modal.component.sass']
})
export class PruefvermerkModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkModalComponent> | undefined;
  title: string = ''
  pruefvermerkForm: FormGroup

  pruefvermerkkategorien$: Observable<Kat[]>
  id_kategorie: string | undefined

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<PruefvermerkModalComponent>, private _katFacade: KatFacade) {
    this.pruefvermerkkategorien$ = _katFacade.pruefvermerkkategorien$
    // _katFacade.pruefvermerkkategorien$.subscribe(data => console.log(data))

    this.pruefvermerkForm = this._formBuilder.group({
      id: [],
      id_kategorie: [],
      kategorie: [],
      item: [],
      description: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.pruefvermerkForm.patchValue(data.data.pruefvermerk)
      if (data.data.pruefvermerk) this.selectKategorie(data.data.pruefvermerk.kategorie)
    })
  }

  selectKategorie(kategorie: string) {
    this._katFacade.getIdByKategorie(kategorie).subscribe(id => this.pruefvermerkForm.patchValue({ id_kategorie: id }))
  }

  create() {
    const insert: Pruefvermerk = this.pruefvermerkForm.value
    this._katFacade.insertPruefvermerk(insert)
    this.modal?.close()
  }
  update() {
    let update: Pruefvermerk = this.pruefvermerkForm.value
    console.log(update)
    this._katFacade.updatePruefvermerk(update)
    this.modal?.close()
  }
  delete() {
    this._katFacade.deletePruefvermerk(this.pruefvermerkForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
