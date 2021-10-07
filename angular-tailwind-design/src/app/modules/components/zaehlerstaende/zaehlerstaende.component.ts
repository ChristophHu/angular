import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand';
import { ZaehlerstaendeService } from 'src/app/core/services/zaehlerstaende.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';

@Component({
  selector: 'app-zaehlerstaende',
  templateUrl: './zaehlerstaende.component.html',
  styleUrls: ['./zaehlerstaende.component.sass']
})
export class ZaehlerstaendeComponent implements OnInit, OnDestroy {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  zaehlerstaende: Observable<Zaehlerstand[]>
  subscription!: Subscription

  constructor(private modalService: ModalService<ZaehlerstandComponent>, private zaehlerstaendeService: ZaehlerstaendeService) {
    this.zaehlerstaende = this.zaehlerstaendeService.zaehlerstande
  }

  ngOnInit(): void {
    // datatables
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

    // data
    this.subscription = this.zaehlerstaende.subscribe(data => {
      this.dtTrigger.next()
    })

    this.zaehlerstaendeService.getZaehlerstaende()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id?: string): Promise<void> {
    let zaehlerstand: Zaehlerstand | undefined
    const { ZaehlerstandComponent } = await import(
      './zaehlerstand/zaehlerstand.component'
    )
    if (id) {
      zaehlerstand = this.zaehlerstaendeService._dataStore.zaehlerstande.find(el => el.id == id)
      console.log(zaehlerstand)
      this.modalService.open(ZaehlerstandComponent, {
        data: {
          title: 'Zaehlerstand bearbeiten',
          zaehlerstand
        }
      })
    }
  }

}
