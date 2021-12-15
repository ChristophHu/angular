import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PruefvermerkModalComponent } from './pruefvermerk-modal/pruefvermerk-modal.component';

@Component({
  selector: 'app-pruefvermerke',
  templateUrl: './pruefvermerke.component.html',
  styleUrls: ['./pruefvermerke.component.sass']
})
export class PruefvermerkeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  pruefvermerke: any[] = [
    {
       "id":"9fc71242-6a11-455a-894f-900211192d09",
       "kategorie":"E-Anlage",
       "item":"Positionslicht",
       "description":"B"
    },
    {
       "id":"73c02ef7-f568-4433-8b3f-56ec3c5951a2",
       "kategorie":"Feste Ausrüstung",
       "item":"Türen, Fenster, Oberlichter",
       "description":""
    },
    {
       "id":"78a473b2-3d73-4c35-8c80-d5f2d164658e",
       "kategorie":"Feste Ausrüstung",
       "item":"Rettungseinrichtungen, Bergeplattform",
       "description":""
    },
    {
       "id":"de097cd0-74cb-421d-ad5a-a1f117fc13a5",
       "kategorie":"Feste Ausrüstung",
       "item":"Anker- und Verholeinrichtungen",
       "description":""
    },
    {
       "id":"1bae0383-0f4a-43b9-adc3-ffb50dafc467",
       "kategorie":"Manövereinrichtungen",
       "item":"Ruderhydraulik",
       "description":"-"
    },
    {
       "id":"99cd93aa-ee14-448a-b434-308387925301",
       "kategorie":"Manövereinrichtungen",
       "item":"Rudermechanik",
       "description":"-"
    },
    {
       "id":"bf0f2f3e-5242-45e4-9a4f-ec899e787b03",
       "kategorie":"Manövereinrichtungen",
       "item":"Ruderanlage",
       "description":"ist hinten"
    },
    {
       "id":"db2375d2-661f-43fb-b944-302b03df29ea",
       "kategorie":"Manövereinrichtungen",
       "item":"Ruderelektrik",
       "description":"-"
    },
    {
       "id":"09a92dbd-8f3e-4743-b490-695f9a07bd26",
       "kategorie":"Schiffskörper",
       "item":"Gangbord, Scheuerleisten",
       "description":""
    },
    {
       "id":"718d067b-56ec-451f-99bf-dff4fe8466fc",
       "kategorie":"Schiffskörper",
       "item":"Steuerhaus und Aufbauten",
       "description":""
    },
    {
       "id":"a9f88d27-e328-449d-8c46-ddefa07b0cf7",
       "kategorie":"Schiffskörper",
       "item":"Geländer und Reling",
       "description":""
    },
    {
       "id":"ae3f011e-6827-4d33-85b7-a16fc70461f0",
       "kategorie":"Schiffskörper",
       "item":"Decks, Luken und Klappen",
       "description":""
    }
 ]

  constructor(private _modalService: ModalService<PruefvermerkModalComponent>) { }

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
    // let zweck: Kat | undefined
    const { PruefvermerkModalComponent } = await import(
      './pruefvermerk-modal/pruefvermerk-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(PruefvermerkModalComponent, {
        data: {
          title: 'Prüfvermerk bearbeiten'
        }
      })
    } else {
      this._modalService.open(PruefvermerkModalComponent, {
        data: {
          title: 'Prüfvermerk hinzufügen'
        }
      })
    }
  }

}
