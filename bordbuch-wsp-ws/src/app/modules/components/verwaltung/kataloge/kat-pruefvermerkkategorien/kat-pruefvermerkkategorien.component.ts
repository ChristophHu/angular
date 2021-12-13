import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatPruefvermerkkategorieModalComponent } from './kat-pruefvermerkkategorie-modal/kat-pruefvermerkkategorie-modal.component';

@Component({
  selector: 'app-kat-pruefvermerkkategorien',
  templateUrl: './kat-pruefvermerkkategorien.component.html',
  styleUrls: ['./kat-pruefvermerkkategorien.component.sass']
})
export class KatPruefvermerkkategorienComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  kat: Kat[] = [
    { id:"14c1af2c-404b-465a-a421-7250484759fb", bezeichnung: "Schiffskörper"},
    { id:"49320211-960e-4308-804e-135976c255a7", bezeichnung: "E-Anlage"},
    { id:"691ee06a-a8a2-44ef-b756-1dacae3af566", bezeichnung: "Feste Ausrüstung"},
    { id:"d9c21733-be56-4a15-a267-71e16917835f", bezeichnung: "Manövereinrichtungen"}
  ]

  constructor(private _modalService: ModalService<KatPruefvermerkkategorieModalComponent>) { }

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
    // let zweck: Zweck | undefined
    const { KatPruefvermerkkategorieModalComponent } = await import(
      './kat-pruefvermerkkategorie-modal/kat-pruefvermerkkategorie-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatPruefvermerkkategorieModalComponent, {
        data: {
          title: 'Prüfvermerkkategorie bearbeiten'
        }
      })
    } else {
      this._modalService.open(KatPruefvermerkkategorieModalComponent, {
        data: {
          title: 'Prüfvermerkkategorie hinzufügen'
        }
      })
    }
  }
}
