import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Streife } from 'src/app/core/models/streife';
import { StreifeService } from 'src/app/core/services/streife.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { StreifeComponent } from './streife/streife.component';

@Component({
  selector: 'app-streifen',
  templateUrl: './streifen.component.html',
  styleUrls: ['./streifen.component.sass']
})
export class StreifenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  streifen: Observable<Streife[]>
  subscription!: Subscription

  constructor(private modalService: ModalService<StreifeComponent>, private streifeService: StreifeService) {
    this.streifen = this.streifeService.streifen
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
      retrieve: true,
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
    this.subscription = this.streifen.subscribe(data => {
      this.dtTrigger.next()
    })

    this.streifeService.getStreifen()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id?: string): Promise<void> {
    console.log(id)
    let streife: Streife | undefined
    const { StreifeComponent } = await import(
      './streife/streife.component'
    )
    if (id) {
      streife = this.streifeService._dataStore.streifen.find(el => el.id == id)
      console.log(streife)
      this.modalService.open(StreifeComponent, {
        data: {
          title: 'Betankung bearbeiten',
          streife
        }
      })
    }
  }

}
