import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subject, Subscription } from 'rxjs'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { BetankungComponent } from './betankung/betankung.component'
import { Betankung } from '../../../core/models/betankung'
import { BetankungService } from '../../../core/services/betankung.service'

@Component({
  selector: 'app-betankungen',
  templateUrl: './betankungen.component.html',
  styleUrls: ['./betankungen.component.sass']
})
export class BetankungenComponent implements OnInit, OnDestroy {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  betankungen: Observable<Betankung[]>
  subscription!: Subscription

  constructor(private modalService: ModalService<BetankungComponent>, private betankungService: BetankungService) {
    this.betankungen = this.betankungService.betankungen
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
    this.subscription = this.betankungen.subscribe(data => {
      this.dtTrigger.next()
    })

    this.betankungService.getBetankungen()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id: string): Promise<void> {
    console.log(id)
    let betankung: Betankung | undefined
    const { BetankungComponent } = await import(
      './betankung/betankung.component'
    )
    if (id) {
      betankung = this.betankungService._dataStore.betankungen.find(el => el.id == id)
      console.log(betankung)
      this.modalService.open(BetankungComponent, {
        data: {
          title: 'Betankung bearbeiten',
          betankung
        }
      })
    }
  }
}
