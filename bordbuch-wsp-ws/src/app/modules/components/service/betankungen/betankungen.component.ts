import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Betankung } from 'src/app/core/models/betankung';
import { BetankungService } from 'src/app/core/services/betankung.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { BetankungModalComponent } from './betankung-modal/betankung-modal.component';

@Component({
  selector: 'app-betankungen',
  templateUrl: './betankungen.component.html',
  styleUrls: ['./betankungen.component.sass']
})
export class BetankungenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  betankungen$!: Observable<Betankung[]>

  constructor(private _betankungService: BetankungService, private _modalService: ModalService<BetankungModalComponent>) {
    this.betankungen$ = this._betankungService.betankungen
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
    // this._betankungService.getBetankungen()
  }

  async showModal(id: string): Promise<void> {
    console.log(id)
    let betankung: Betankung | undefined
    const { BetankungModalComponent } = await import(
      './betankung-modal/betankung-modal.component'
    )
    // if (id) {
    //   betankung = this.betankungService._dataStore.betankungen.find(el => el.id == id)
      console.log(betankung)
      this._modalService.open(BetankungModalComponent, {
        data: {
          title: 'Betankung bearbeiten'
        }
      })
    // }
  }
  
}
