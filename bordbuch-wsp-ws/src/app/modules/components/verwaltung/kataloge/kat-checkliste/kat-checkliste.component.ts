import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { KatChecklisteModalComponent } from './kat-checkliste-modal/kat-checkliste-modal.component';

@Component({
  selector: 'app-kat-checkliste',
  templateUrl: './kat-checkliste.component.html',
  styleUrls: ['./kat-checkliste.component.sass']
})
export class KatChecklisteComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // cb: any[] = [
  //   ["a6a9a323-89b8-45a5-96d8-61866c4a0cef","Alkomat"],
  //   ["75764649-769b-4935-848c-25ccb213cf56","Anhaltestab"],
  //   ["bd34d03c-3728-4df3-9ba7-7ead0d575532","Anker"],
  //   ["c6aac15c-4fea-49ce-943b-21070169f361","Rettungsring"]
  // ]
  // kat: Kat[] = []
  // checkliste: any[] = []
  checkliste$: Observable<Kat[]>

  constructor(private _modalService: ModalService<KatChecklisteModalComponent>, private _katFacade: KatFacade) {
    this.checkliste$ = _katFacade.checkliste$
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
    // this.array2obj(this.kat)
  }

  // array2obj(arr: any) {
  //   arr.forEach((el: any) => {
  //     this.checkliste.push({ id: el[0], bezeichnung: el[1] })
  //   });
  // }

  async showModal(kat?: Kat): Promise<void> {
    const { KatChecklisteModalComponent } = await import(
      './kat-checkliste-modal/kat-checkliste-modal.component'
    )
    if (kat) {
      this._modalService.open(KatChecklisteModalComponent, {
        data: {
          title: 'Checkliste bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatChecklisteModalComponent, {
        data: {
          title: 'Checkliste hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deleteChecklist(id)
  }
}
