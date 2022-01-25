import { Component, OnInit } from '@angular/core';
import { RxjsNotificationsService } from 'projects/rxjs-notifications/src/public-api';
import { Notification, NotificationType, ExceptionType } from 'projects/rxjs-notifications/src/lib/model/notification.model'
import { Observable, Subject, take } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { KatBetriebsstoffeModalComponent } from './kat-betriebsstoffe-modal/kat-betriebsstoffe-modal.component';

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
      pageLength: 10, 
      responsive: true, 
      // "paging"  : false,
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      "autoWidth": true,
      // "retrieve": true,
      // data:this.dtUsers,
      // columns: [{title: 'User ID', data: 'id'},
      //       {title: 'First Name', data: 'firstName'},
      //       {title: 'Last Name', data: 'lastName' }],
      "language": {
        // "processing": "Procesando...",
        "search": "Suche:",
        "lengthMenu": "Anzeigen von _MENU_ Elementen pro Seite",
        "info": "Anzeige von _START_ bis _END_ von _TOTAL_ Elementen",
        // "infoEmpty": "Mostrando ningún elemento.",
        // "infoFiltered": "(filtrado _MAX_ elementos total)",
        // "infoPostFix": "",
        // "loadingRecords": "Cargando registros...",
        // "zeroRecords": "No se encontraron registros",
        "emptyTable": "Keine Datensätze vorhanden",
        "paginate": {
          "first": "Erste",
          "previous": "Vorherige",
          "next": "Nächste",
          "last": "Letzte"
        },
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
    console.log(id)
    const notification: Notification = { content: 'Soll dierer Eintrag wirklich entfernt werden?', title: 'Eintrag löschen', type: NotificationType.Alert, exception: ExceptionType.YesNo }
    console.log(notification)
    this._RxjsNotificationService.addAndResponseNotification(notification).pipe(take(1)).subscribe((response: boolean) => {
      console.log(response)
      if (response) this._katFacade.deleteBetriebsstoffe(id)
    })
  }
}
