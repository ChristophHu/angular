import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Pruefvermerkskategorie } from 'src/app/core/models/Pruefvermerkskategorie';
import { VerwaltungService } from 'src/app/core/services/verwaltung.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PruefvermerkskategorieComponent } from '../verwaltung-von-pruefvermerk-kat/pruefvermerkskategorie/pruefvermerkskategorie.component';

@Component({
  selector: 'app-verwaltung-von-pruefvermerk-kat',
  templateUrl: './verwaltung-von-pruefvermerk-kat.component.html',
  styleUrls: ['./verwaltung-von-pruefvermerk-kat.component.sass']
})
export class VerwaltungVonPruefvermerkKatComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  kategorien: Observable<Pruefvermerkskategorie[]>
  subscription!: Subscription
  
  constructor(private modalService: ModalService<PruefvermerkskategorieComponent>, private verwaltungService: VerwaltungService) {
    this.kategorien = this.verwaltungService.pruefvermerkskategorien
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
    this.subscription = this.kategorien.subscribe((data: any) => {
      this.dtTrigger.next()
    })

    this.verwaltungService.getPruefvermerksKategorien()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id?: string): Promise<void> {
    console.log(id)
    let kategorie: Pruefvermerkskategorie | undefined
    const { PruefvermerkskategorieComponent } = await import(
      './pruefvermerkskategorie/pruefvermerkskategorie.component'
    )

    if (id) {
      kategorie = this.verwaltungService._dataStore.pruefvermerkskategorien.find(el => el.id == id)
      console.log(kategorie)
      this.modalService.open(PruefvermerkskategorieComponent, {
        data: {
          title: 'Kategorie bearbeiten',
          kategorie
        }
      })
    } else {
      kategorie = { id: '', bezeichnung: ''}
      this.modalService.open(PruefvermerkskategorieComponent, {
        data: {
          title: 'Kategorie erstellen',
          kategorie
        }
      })
    }
  }
}
