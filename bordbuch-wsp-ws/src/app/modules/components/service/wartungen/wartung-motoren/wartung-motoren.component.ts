import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { WartungMotorModalComponent } from './wartung-motor-modal/wartung-motor-modal.component';

@Component({
  selector: 'app-wartung-motoren',
  templateUrl: './wartung-motoren.component.html',
  styleUrls: ['./wartung-motoren.component.sass']
})
export class WartungMotorenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  zaehlerstaende$!: Observable<Zaehlerstand[]>

  constructor(private _modalService: ModalService<WartungMotorModalComponent>, private _specFacade: SpecFacade) {
    this.zaehlerstaende$ = this._specFacade.allZaehlerstaende$
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
  }

  async showModal(zaehlerstand: Zaehlerstand): Promise<void> {
    console.log(zaehlerstand)
    const { WartungMotorModalComponent } = await import(
      './wartung-motor-modal/wartung-motor-modal.component'
    )
    if (zaehlerstand) {
      this._modalService.open(WartungMotorModalComponent, {
        data: {
          title: 'Wartung bearbeiten',
          zaehlerstand
        }
      })
    }
  }
}
