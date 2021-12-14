import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ChecklisteModalComponent } from './checkliste-modal/checkliste-modal.component';

@Component({
  selector: 'app-schiffe',
  templateUrl: './schiffe.component.html',
  styleUrls: ['./schiffe.component.sass']
})
export class SchiffeComponent implements OnInit {
// datatables
dtOptions: DataTables.Settings = {}
dtTrigger: Subject<any> = new Subject()

schiffe: any[] = [
  {
    "id":"1",
    "name":"BOOT 1A",
    "marke":"MARKE1",
    "typ":"SCHLAUCHBOOT",
    "identifikationsnummer":"A1A",
    "durchsicht":"",
    "dienststelle":"DST NORD"
  },
  {
    "id":"3",
    "name":"BOOT 3A",
    "marke":"MARKE3",
    "typ":"FREGATTE",
    "identifikationsnummer":"A3A",
    "durchsicht":"",
    "dienststelle":"DST NORD"
  },
  {
    "id":"36b9e7d3-fb83-41a6-b54e-93e226db12e3",
    "name":"Seemöve",
    "marke":"",
    "typ":"",
    "identifikationsnummer":"",
    "durchsicht":"",
    "dienststelle":"DST NORD"
  },
  {
    "id":"4",
    "name":"BOOT 1B",
    "marke":"MARKE1B",
    "typ":"UBOOT",
    "identifikationsnummer":"B1B",
    "durchsicht":"",
    "dienststelle":"DST OST"
  }
]

constructor(private _modalService: ModalService<ChecklisteModalComponent>) { }

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
  const { ChecklisteModalComponent } = await import(
    './checkliste-modal/checkliste-modal.component'
  )
  if (id) {
    // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
    // console.log(betankung)
    this._modalService.open(ChecklisteModalComponent, {
      data: {
        title: 'Checkliste bearbeiten'
      }
    })
  } else {
    this._modalService.open(ChecklisteModalComponent, {
      data: {
        title: 'Checkliste hinzufügen'
      }
    })
  }
}
}
