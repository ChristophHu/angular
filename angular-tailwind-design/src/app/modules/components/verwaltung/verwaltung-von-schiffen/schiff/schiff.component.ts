import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Schiff } from 'src/app/core/models/schiff';
import { VerwaltungService } from '../../../../../core/services/verwaltung.service';
import { Observable } from 'rxjs';
import { Dienststelle } from 'src/app/core/models/dienststelle';

@Component({
  selector: 'app-schiff',
  templateUrl: './schiff.component.html',
  styleUrls: ['./schiff.component.sass']
})
export class SchiffComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<SchiffComponent> | undefined;
  id: string = ''
  title: string = ''
  selectedDstId: string = ''
  schiff!: Schiff
  schiffForm: FormGroup

  // data
  dienststellen!: Observable<Dienststelle[]>
  
  constructor(private formBuilder: FormBuilder, private modalService: ModalService<SchiffComponent>, private verwaltungService: VerwaltungService) {
    this.dienststellen = this.verwaltungService.dienststellen

    this.schiffForm = this.formBuilder.group({
      id: [],
      name: [],
      dienststelle: [],
      marke: [],
      typ: [],
      identifikationsnummer: []
    })
  }

  ngOnInit(): void {
    this.verwaltungService.getDienststellen()
    
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.schiffForm.patchValue(data.data.schiff)
      if (data.data.schiff) {
        this.verwaltungService.dienststellen.subscribe((dst: Dienststelle[]) => {
          dst.find((dst: any) => {
            if(dst.bezeichnung == data.data.schiff.dienststelle) {
              this.selectedDstId = dst.id
            }
          })
        })
      }
    })
  }

  create() {
    this.verwaltungService.createSchiff(this.schiffForm.value)
    this.modal?.close()
  }

  update() {
    this.verwaltungService.updateSchiff(this.schiffForm.value)
    this.modal?.close()
  }

  delete() {
    this.verwaltungService.deleteSchiff(this.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

  clear() {
    this.schiffForm.reset()
  }

}
