import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
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
  
  // kat: Kat[] = [
  //   {id: "1", bezeichnung: "MOTOR1"},
  //   {id: "2", bezeichnung: "MOTOR2"},
  //   {id: "3", bezeichnung: "EINSATZZEIT"},
  //   {id: "6", bezeichnung: "MOTOR3"}
  // ]

  zaehlerstandstypen$: Observable<Zaehlerstandstyp[]>

  constructor(private _modalService: ModalService<KatZaehlerstandstypModalComponent>, private _katFacade: KatFacade) {
    this.zaehlerstandstypen$ = _katFacade.zaehlerstandstypen$
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
  
  async showModal(kat?: Zaehlerstandstyp): Promise<void> {
    const { KatZaehlerstandstypModalComponent } = await import(
      './kat-zaehlerstandstyp-modal/kat-zaehlerstandstyp-modal.component'
    )
    if (kat) {
      this._modalService.open(KatZaehlerstandstypModalComponent, {
        data: {
          title: 'Zählerstandstyp bearbeiten',
          kat
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

  delete(id: string) {
    this._katFacade.deleteZaehlerstandstyp(id)
  }
}
