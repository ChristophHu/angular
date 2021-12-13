import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Dienststelle } from 'src/app/core/models/dienststelle.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatDienststelleModalComponent } from './kat-dienststelle-modal/kat-dienststelle-modal.component';

@Component({
  selector: 'app-kat-dienststellen',
  templateUrl: './kat-dienststellen.component.html',
  styleUrls: ['./kat-dienststellen.component.sass']
})
export class KatDienststellenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  dienststellen: any = [
    {
      id: "1",
      bezeichnung: "DST NORD",
      position: {
        longitude:2.2000000476837158,
        latitude:1.1000000238418579
      },
      adresse: {
        strasse: "AA",
        hausnummer: "1A",
        postleitzahl: "11111",
        ort:"ORT1"
      },
      mailadresse:"A@A.A"},
  ]

  constructor(private _modalService: ModalService<KatDienststelleModalComponent>) { }

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
    const { KatDienststelleModalComponent } = await import(
      './kat-dienststelle-modal/kat-dienststelle-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(KatDienststelleModalComponent, {
        data: {
          title: 'Dienststelle bearbeiten'
        }
      })
    } else {
      this._modalService.open(KatDienststelleModalComponent, {
        data: {
          title: 'Dienststelle hinzufügen'
        }
      })
    }
  }
}
