import { Component, OnInit } from '@angular/core';
import { RxjsNotificationsService } from 'projects/rxjs-notifications/src/public-api';
import { Notification, NotificationType, ExceptionType } from 'projects/rxjs-notifications/src/lib/model/notification.model'
import { Observable, Subject, take } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { KatBetriebsstoffeModalComponent } from './kat-betriebsstoffe-modal/kat-betriebsstoffe-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kat-betriebsstoffe',
  templateUrl: './kat-betriebsstoffe.component.html',
  styleUrls: ['./kat-betriebsstoffe.component.sass']
})
export class KatBetriebsstoffeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  betriebsstoffe$: Observable<Kat[]>

  constructor(
    private _modalService: ModalService<KatBetriebsstoffeModalComponent>, 
    private _katFacade: KatFacade,
    private _RxjsNotificationService: RxjsNotificationsService) 
    {
      this.betriebsstoffe$ = _katFacade.betriebsstoffe$
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers', 
      pageLength: 10,     // Anzahl von Elementen pro Seite
      paging    : true,   // (default: true)
      responsive: true,   // (default: true)
      ordering  : true,   // Sortierung (default: true)
      processing: true,   // (default: true)
      autoWidth : true,   // (default: true)
      retrieve  : true,   // (default: true)
      info      : false,  // Anzahl von Elementen (default: true)
      language  : {
        "url": environment.base_href + "assets/data/datatables.german.json" // "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
      }
    }
  }

  async showModal(kat?: Kat): Promise<void> {
    const { KatBetriebsstoffeModalComponent } = await import(
      './kat-betriebsstoffe-modal/kat-betriebsstoffe-modal.component'
    )
    if (kat) {
      this._modalService.open(KatBetriebsstoffeModalComponent, {
        data: {
          title: 'Betriebsstoff bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatBetriebsstoffeModalComponent, {
        data: {
          title: 'Betriebsstoff hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    const notification: Notification = { content: 'Soll dieser Eintrag wirklich entfernt werden?', title: 'Eintrag löschen', type: NotificationType.Alert, exception: ExceptionType.YesNo }
    this._RxjsNotificationService.addAndResponseNotification(notification).pipe(take(1)).subscribe((response: boolean) => {
      if (response) this._katFacade.deleteBetriebsstoffe(id)
    })
  }
}
