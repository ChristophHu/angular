import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Zweck } from 'src/app/core/models/zweck.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
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
  
  zweck: Zweck[] = [
    {
       "id":"22868a48-e930-426e-a8cc-89a7d2b0c651",
       "bezeichnung":"Raumschutz"
    },
    {
       "id":"a40c5ee7-2c07-45aa-a045-6acbf36562a6",
       "bezeichnung":"Sonstiges"
    },
    {
       "id":"b165963d-ec6d-49cf-a9a4-32cf5f9fc4d4",
       "bezeichnung":"Pause"
    },
    {
       "id":"fded9094-8d5c-48f7-be6e-f1b4cc5288ad",
       "bezeichnung":"Betankung"
    }
 ]

  constructor(private _modalService: ModalService<KatZweckModalComponent>) { }

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
    // this._betankungService.getBetankungen()
  }
  
  async showModal(id?: string): Promise<void> {
    console.log(id)
    let zweck: Zweck | undefined
    const { KatZweckModalComponent } = await import(
      './kat-zweck-modal/kat-zweck-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatZweckModalComponent, {
        data: {
          title: 'Zweck bearbeiten'
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

}
