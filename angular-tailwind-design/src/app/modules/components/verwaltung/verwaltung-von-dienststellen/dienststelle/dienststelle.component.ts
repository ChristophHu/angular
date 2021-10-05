import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Dienststelle } from 'src/app/core/models/dienststelle';
import { VerwaltungService } from 'src/app/core/services/verwaltung.service';

@Component({
  selector: 'app-dienststelle',
  templateUrl: './dienststelle.component.html',
  styleUrls: ['./dienststelle.component.sass']
})
export class DienststelleComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<DienststelleComponent> | undefined;
  id: string = ''
  dienststelle!: Dienststelle
  dienststelleForm: FormGroup

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<DienststelleComponent>, private verwaltungService: VerwaltungService) {
    this.dienststelleForm = this.formBuilder.group({
      id: [],
      bezeichnung: [],
      mailadresse: [],
      adresse: this.formBuilder.group({ 
        strasse: [], 
        hausnummer: [], 
        postleitzahl: [], 
        ort: []
      }),
      position: this.formBuilder.group({
        latitude: [],
        longitude: []
      })
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.id = data.data.id
      
      this.verwaltungService.dienststellen.subscribe((dienststellen: Dienststelle[]) => {
        dienststellen.find(dienststelle => {
          if (dienststelle.id == this.id) {
            console.log(dienststelle)
            this.dienststelle = dienststelle
          }
        })
      })
      this.dienststelleForm.patchValue(this.dienststelle)
    })
  }

  create() {
    this.verwaltungService.createDienststelle(this.dienststelleForm.value)
    this.modal?.close()
  }

  update() {
    this.verwaltungService.updateDienststelle(this.dienststelleForm.value)
    this.modal?.close()
  }

  delete() {
    this.verwaltungService.deleteDienststelle(this.dienststelleForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

  clear() {
    this.dienststelleForm.reset()
  }

}
