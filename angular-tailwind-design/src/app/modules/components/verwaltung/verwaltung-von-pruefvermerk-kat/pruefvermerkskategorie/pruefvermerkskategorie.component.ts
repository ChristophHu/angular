import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pruefvermerkskategorie } from 'src/app/core/models/Pruefvermerkskategorie';
import { VerwaltungService } from 'src/app/core/services/verwaltung.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-pruefvermerkskategorie',
  templateUrl: './pruefvermerkskategorie.component.html',
  styleUrls: ['./pruefvermerkskategorie.component.sass']
})
export class PruefvermerkskategorieComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkskategorieComponent> | undefined
  title: string = ''
  pruefvermerkkategorieForm: FormGroup
  
  constructor(private formBuilder: FormBuilder, private modalService: ModalService<PruefvermerkskategorieComponent>, private verwaltungService: VerwaltungService) {
    this.pruefvermerkkategorieForm = this.formBuilder.group({
      id: [],
      bezeichnung: []
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data: any) => {
      console.log(data)
      this.title = data.data.title
      this.pruefvermerkkategorieForm.patchValue(data.data.kategorie)
    })
  }

  create() {
    this.verwaltungService.createKatPruefvermerk(this.pruefvermerkkategorieForm.value)
    this.modal?.close()
  }

  update() {
    this.verwaltungService.updateKatPruefvermerk(this.pruefvermerkkategorieForm.value)
    this.modal?.close()
  }

  delete() {
    this.verwaltungService.deleteKatPruefvermerk(this.pruefvermerkkategorieForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}

