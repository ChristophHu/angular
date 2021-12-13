import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFunktionModalComponent } from './kat-funktion-modal/kat-funktion-modal.component';

@Component({
  selector: 'app-kat-funktionen',
  templateUrl: './kat-funktionen.component.html',
  styleUrls: ['./kat-funktionen.component.sass']
})
export class KatFunktionenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  kat: Kat[] = [
    {"id":"8873343a-9dfc-4f00-ac6a-38918e786eaa","bezeichnung":"Streifenbegleiter"},
    {"id":"d21ef47c-f9b6-4576-9c6f-5f8627b12016","bezeichnung":"Gast"},
    {"id":"e1d86f29-9556-40f9-93d8-65fe7d8fb63b","bezeichnung":"Streifenführer"}
  ]

  constructor(private _modalService: ModalService<KatFunktionModalComponent>) { }

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
    const { KatFunktionModalComponent } = await import(
      './kat-funktion-modal/kat-funktion-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatFunktionModalComponent, {
        data: {
          title: 'Funktion bearbeiten'
        }
      })
    } else {
      this._modalService.open(KatFunktionModalComponent, {
        data: {
          title: 'Funktion hinzufügen'
        }
      })
    }
  }
}
