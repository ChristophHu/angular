import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { DienststelleComponent } from './dienststelle/dienststelle.component';
import { Dienststelle } from 'src/app/core/models/dienststelle';
import { VerwaltungService } from 'src/app/core/services/verwaltung.service';

@Component({
  selector: 'app-verwaltung-von-dienststellen',
  templateUrl: './verwaltung-von-dienststellen.component.html',
  styleUrls: ['./verwaltung-von-dienststellen.component.sass']
})
export class VerwaltungVonDienststellenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  dienststellen: Observable<Dienststelle[]>
  subscription!: Subscription

  constructor(private modalService: ModalService<DienststelleComponent>, private verwaltungService: VerwaltungService) {
    this.dienststellen = this.verwaltungService.dienststellen
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
    this.subscription = this.dienststellen.subscribe(data => {
      this.dtTrigger.next()
    })

    this.verwaltungService.getDienststellen()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id: string): Promise<void> {
    const { DienststelleComponent } = await import(
      './dienststelle/dienststelle.component'
    )
    this.modalService.open(DienststelleComponent, {
      data: {
        id: id
      }
    })
  }
}
