import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Zweck } from 'src/app/core/models/zweck.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { KatZweckModalComponent } from './kat-zweck-modal/kat-zweck-modal.component';

@Component({
  selector: 'app-kat-zweck',
  templateUrl: './kat-zweck.component.html',
  styleUrls: ['./kat-zweck.component.sass']
})
export class KatZweckComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  zweck$: Observable<Kat[]>

  constructor(private _modalService: ModalService<KatZweckModalComponent>, private _katFacade: KatFacade) {
    this.zweck$ = _katFacade.zweck$
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
    const { KatZweckModalComponent } = await import(
      './kat-zweck-modal/kat-zweck-modal.component'
    )
    if (kat) {
      this._modalService.open(KatZweckModalComponent, {
        data: {
          title: 'Zweck bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatZweckModalComponent, {
        data: {
          title: 'Zweck hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deleteZweck(id)
  }
}
