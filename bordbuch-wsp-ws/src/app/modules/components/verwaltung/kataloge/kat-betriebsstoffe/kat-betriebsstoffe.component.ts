import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatBetriebsstoffeModalComponent } from './kat-betriebsstoffe-modal/kat-betriebsstoffe-modal.component';

@Component({
  selector: 'app-kat-betriebsstoffe',
  templateUrl: './kat-betriebsstoffe.component.html',
  styleUrls: ['./kat-betriebsstoffe.component.sass']
})
export class KatBetriebsstoffeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  kat: Kat[] = [
    {"id":"463945a9-0812-4c5b-a683-8e82a76679b6","bezeichnung":"Benzin"},
    {"id":"e1167262-3e8c-4c25-b572-f99939784a8f","bezeichnung":"Diesel"}
  ]

  constructor(private _modalService: ModalService<KatBetriebsstoffeModalComponent>) { }

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
    // let zweck: Kat | undefined
    const { KatBetriebsstoffeModalComponent } = await import(
      './kat-betriebsstoffe-modal/kat-betriebsstoffe-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatBetriebsstoffeModalComponent, {
        data: {
          title: 'Betriebsstoff bearbeiten'
        }
      })
    } else {
      this._modalService.open(KatBetriebsstoffeModalComponent, {
        data: {
          title: 'Betriebsstoff hinzufügen'
        }
      })
    }
  }
}
