import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk';
import { Status } from 'src/app/core/models/status';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-pruefvermerk',
  templateUrl: './pruefvermerk.component.html',
  styleUrls: ['./pruefvermerk.component.sass']
})
export class PruefvermerkComponent implements OnInit, OnDestroy {
  @ViewChild('modalComponent') modal: | ModalComponent<PruefvermerkComponent> | undefined;

  title: string = ''
  edit: boolean = false

  private pruefvermerkSubscription = new Subscription
  pruefvermerke: Pruefvermerk[] = []

  pruefvermerkForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private modalServiceP: ModalService<PruefvermerkComponent>, private appService: AppService) {
    this.pruefvermerkForm = this._formBuilder.group({
      id        : [''],
      id_ship   : [''],
      date      : [''],
      item      : [''],
      description: [''],
      status    : [Status.nicht_bearbeitet]
    })
  }

  ngOnInit(): void {
    this.modalServiceP.getData().then((data) => {
      this.edit = data.data.reparatur.id
      this.title = data.data.title
      this.pruefvermerkForm.patchValue(data.data.reparatur)
    })

    this.pruefvermerkSubscription
      .add(
        this.appService.pruefvermerke.subscribe(data => {
          this.pruefvermerke = data
        })
      )
    this.appService.getPruefvermerke()
  }

  ngOnDestroy(): void {
    this.pruefvermerkSubscription.unsubscribe()
  }

  create() {
    this.appService.insertPruefvermerk(this.pruefvermerkForm.value)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
