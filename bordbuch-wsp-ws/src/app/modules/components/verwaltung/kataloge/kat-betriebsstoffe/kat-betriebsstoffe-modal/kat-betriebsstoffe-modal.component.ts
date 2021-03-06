import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { Notification, NotificationType, ExceptionType } from 'projects/rxjs-notifications/src/lib/model/notification.model'
import { RxjsNotificationsService } from 'projects/rxjs-notifications/src/public-api';

@Component({
  selector: 'app-kat-betriebsstoffe-modal',
  templateUrl: './kat-betriebsstoffe-modal.component.html',
  styleUrls: ['./kat-betriebsstoffe-modal.component.sass']
})
export class KatBetriebsstoffeModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<KatBetriebsstoffeModalComponent> | undefined;
  title: string = ''
  katForm: FormGroup
  
  constructor(
    private _formBuilder: FormBuilder, 
    private _modalService: ModalService<KatBetriebsstoffeModalComponent>, 
    private _katFacade: KatFacade,
    private _RxjsNotificationService: RxjsNotificationsService
  ) {
    this.katForm = this._formBuilder.group({
      id: [],
      bezeichnung: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      this.katForm.patchValue(data.data.kat)
    })
  }

  create() {
    const insert: Kat = this.katForm.value
    this._katFacade.insertBetriebsstoffe(insert)
    this.modal?.close()
  }
  update() {
    const update: Kat = this.katForm.value
    this._katFacade.updateBetriebsstoffe(update)
    this.modal?.close()
  }
  delete() {
    const notification: Notification = { content: 'Soll dieser Eintrag wirklich entfernt werden?', title: 'Eintrag löschen', type: NotificationType.Alert, exception: ExceptionType.YesNo }
    this._RxjsNotificationService.addAndResponseNotification(notification).pipe(take(1)).subscribe((response: boolean) => {
      if (response) this._katFacade.deleteBetriebsstoffe(this.katForm.value.id)
      this.modal?.close()
    })
  }

  cancel() {
    this.modal?.close()
  }
}
