import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Kennung } from 'src/app/core/models/kennung.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatKennungModalComponent } from './kat-kennung-modal/kat-kennung-modal.component';

@Component({
  selector: 'app-kat-kennungen',
  templateUrl: './kat-kennungen.component.html',
  styleUrls: ['./kat-kennungen.component.sass']
})
export class KatKennungenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  kennungen: Kennung[] = [
    {
       "id":"b6d0cc49-fe33-4a68-a705-c4551c2f7377",
       "bezeichnung":"Nixe 300"
    },
    {
       "id":"e324af40-9661-4b9f-862a-dd0106170fd9",
       "bezeichnung":"Nixe 200"
    },
    {
       "id":"ee6022f8-c39e-4d05-a5f9-2df73c5798e3",
       "bezeichnung":"Nixe 100"
    }
 ]

  constructor(private _modalService: ModalService<KatKennungModalComponent>) { }

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
    let zweck: Kennung | undefined
    const { KatKennungModalComponent } = await import(
      './kat-kennung-modal/kat-kennung-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatKennungModalComponent, {
        data: {
          title: 'Kennung bearbeiten'
        }
      })
    } else {
      this._modalService.open(KatKennungModalComponent, {
        data: {
          title: 'Kennung hinzufügen'
        }
      })
    }
  }
}
