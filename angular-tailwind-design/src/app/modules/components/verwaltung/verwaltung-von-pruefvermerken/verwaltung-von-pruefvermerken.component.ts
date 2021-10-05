import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk';
import { VerwaltungService } from 'src/app/core/services/verwaltung.service';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';

@Component({
  selector: 'app-verwaltung-von-pruefvermerken',
  templateUrl: './verwaltung-von-pruefvermerken.component.html',
  styleUrls: ['./verwaltung-von-pruefvermerken.component.sass']
})
export class VerwaltungVonPruefvermerkenComponent implements OnInit, OnDestroy {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  pruefvermerke: Observable<Pruefvermerk[]>
  subscription!: Subscription
  
  constructor(private modalService: ModalService<PruefvermerkComponent>, private verwaltungService: VerwaltungService) {
    this.pruefvermerke = this.verwaltungService.pruefvermerke
  }

  ngOnInit(): void {
    // datatables
    this.dtOptions = { 
      "pagingType": 'full_numbers', 
      "pageLength": 10, 
      "responsive": true,
      "lengthMenu": [ 10, 15, 20, 50, 100, 500 ],
      // "paging"  : false,
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      "autoWidth": true,
      "retrieve": true,
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
    this.subscription = this.pruefvermerke.subscribe(data => {
      this.dtTrigger.next()
    })

    this.verwaltungService.getPruefvermerke()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id?: string): Promise<void> {
    let pruefvermerk: Pruefvermerk | undefined
    const { PruefvermerkComponent } = await import(
      './pruefvermerk/pruefvermerk.component'
    )

    if (id) {
      pruefvermerk = this.verwaltungService._dataStore.pruefvermerke.find(el => el.id == id)
      this.modalService.open(PruefvermerkComponent, {
        data: {
          title: 'Prüfvermerk bearbeiten',
          pruefvermerk
        }
      })
    } else {
      this.modalService.open(PruefvermerkComponent, {
        data: {
          title: 'Prüfvermerk erstellen'
        }
      })
    }
  }
}
