import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Status } from 'src/app/core/models/status';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Reparatur } from '../../../../core/models/reparatur';
import { ReparaturService } from '../../../../core/services/reparatur.service';

@Component({
  selector: 'app-reparatur',
  templateUrl: './reparatur.component.html',
  styleUrls: ['./reparatur.component.sass']
})
export class ReparaturComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ReparaturComponent> | undefined;
  id: string = ''
  title: string = ''
  selectedKatId: string = ''
  reparaturen!: Reparatur[]
  reparatur!: Reparatur
  reparaturForm: FormGroup
  
  // data
  statusKat$: Observable<Status[]>
  subscription!: Subscription

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<ReparaturComponent>, private reparaturService: ReparaturService) {
    this.statusKat$ = this.reparaturService.status$

    this.reparaturForm = this.formBuilder.group({
      id: [this.id],
      id_ship: [],
      date: [this.reparaturService.dateToLocalISOString(new Date)],
      kategorie: [],
      item: [],
      description: [],
      status: []
    })
  }

  ngOnInit(): void {
    this.reparaturService.getStatustypen()

    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.reparaturForm.patchValue(data.data.reparatur)

      if (data.data.reparatur) {
        this.reparaturService.status$.subscribe((status: Status[]) => {
          status.find((status: any) => {
            if(status.bezeichnung == data.data.reparatur.status) {
              this.selectedKatId = status.id
            }
          })
        })
      }
    })
  }

  create() {
    this.reparaturService.createReparatur(this.reparaturForm.value)
    this.modal?.close()
  }

  update() {
    this.reparaturService.updateReparatur(this.reparaturForm.value)
    this.modal?.close()
  }

  delete() {
    this.reparaturService.deleteReparatur(this.reparaturForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }

  clear() {
    this.reparaturForm.reset()
  }
}
