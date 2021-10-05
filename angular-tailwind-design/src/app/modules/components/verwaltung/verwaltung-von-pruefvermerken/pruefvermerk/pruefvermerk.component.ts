import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk'
import { VerwaltungService } from '../../../../../core/services/verwaltung.service'
import { Observable, Subscription } from 'rxjs'
import { Pruefvermerkskategorie } from 'src/app/core/models/Pruefvermerkskategorie'

@Component({
  selector: 'app-pruefvermerk',
  templateUrl: './pruefvermerk.component.html',
  styleUrls: ['./pruefvermerk.component.sass']
})
export class PruefvermerkComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkComponent> | undefined
  id: string = ''
  title: string = ''
  selectedKatId: string = ''
  pruefvermerk!: Pruefvermerk
  pruefvermerkForm: FormGroup
  
  // data
  pruefvermerkskategorie!: Observable<Pruefvermerkskategorie[]>
  subscription!: Subscription

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<PruefvermerkComponent>, private verwaltungService: VerwaltungService) {
    this.pruefvermerkskategorie = this.verwaltungService.pruefvermerkskategorien

    this.pruefvermerkForm = this.formBuilder.group({
      id: [],
      kategorie: [],
      item: [],
      description: []
    })
  }

  ngOnInit(): void {
    this.verwaltungService.getPruefvermerksKategorien()

    this.modalService.getData().then((data: any) => {
      this.title = data.data.title
      this.pruefvermerkForm.patchValue(data.data.pruefvermerk)
      if (data.data.pruefvermerk) {
        this.verwaltungService.pruefvermerkskategorien.subscribe((kat: Pruefvermerkskategorie[]) => {
          kat.find((kat: any) => {
            if(kat.bezeichnung == data.data.pruefvermerk.kategorie) {
              this.selectedKatId = kat.id
            }
          })
        })
      }
    })
  }

  create() {
    this.verwaltungService.createPruefvermerk(this.pruefvermerkForm.value)
    this.modal?.close()
  }

  update() {
    this.verwaltungService.updatePruefvermerk(this.pruefvermerkForm.value)
    this.modal?.close()
  }

  delete() {
    this.verwaltungService.deletePruefvermerk(this.pruefvermerkForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

  clear() {
    this.pruefvermerkForm.reset()
  }

}
