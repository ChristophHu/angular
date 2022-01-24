import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { WartungSchiffModalComponent } from './wartung-schiff-modal/wartung-schiff-modal.component';

@Component({
  selector: 'app-wartung-schiffe',
  templateUrl: './wartung-schiffe.component.html',
  styleUrls: ['./wartung-schiffe.component.sass']
})
export class WartungSchiffeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  schiffe$!: Observable<Schiff[]>

  constructor(private _modalService: ModalService<WartungSchiffModalComponent>, private _katFacade: KatFacade) {
    this.schiffe$ = this._katFacade.schiffe$
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

  async showModal(schiff?: Schiff): Promise<void> {
    console.log(schiff)
    const { WartungSchiffModalComponent } = await import(
      './wartung-schiff-modal/wartung-schiff-modal.component'
    )
    if (schiff) {
      this._modalService.open(WartungSchiffModalComponent, {
        data: {
          title: 'Wartung durchführen',
          schiff
        }
      })
    } else {
      this._modalService.open(WartungSchiffModalComponent, {
        data: {
          title: 'Wartung durchführen'
        }
      })
    }
  }
}
