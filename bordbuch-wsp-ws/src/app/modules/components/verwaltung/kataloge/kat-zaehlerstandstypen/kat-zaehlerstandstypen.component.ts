import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatZaehlerstandstypModalComponent } from './kat-zaehlerstandstyp-modal/kat-zaehlerstandstyp-modal.component';

@Component({
  selector: 'app-kat-zaehlerstandstypen',
  templateUrl: './kat-zaehlerstandstypen.component.html',
  styleUrls: ['./kat-zaehlerstandstypen.component.sass']
})
export class KatZaehlerstandstypenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  kat: Kat[] = [
    {id: "1", bezeichnung: "MOTOR1"},
    {id: "2", bezeichnung: "MOTOR2"},
    {id: "3", bezeichnung: "EINSATZZEIT"},
    {id: "6", bezeichnung: "MOTOR3"}
  ]

  constructor(private _modalService: ModalService<KatZaehlerstandstypModalComponent>) { }

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
    const { KatZaehlerstandstypModalComponent } = await import(
      './kat-zaehlerstandstyp-modal/kat-zaehlerstandstyp-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatZaehlerstandstypModalComponent, {
        data: {
          title: 'Zählerstandstyp bearbeiten'
        }
      })
    } else {
      this._modalService.open(KatZaehlerstandstypModalComponent, {
        data: {
          title: 'Zählerstandstyp hinzufügen'
        }
      })
    }
  }
}