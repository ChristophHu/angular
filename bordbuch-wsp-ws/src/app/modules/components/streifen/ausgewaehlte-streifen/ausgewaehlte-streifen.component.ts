import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Streife } from 'src/app/core/models/streife.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { AusgewaehlteStreifenModalComponent } from './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component';

@Component({
  selector: 'app-ausgewaehlte-streifen',
  templateUrl: './ausgewaehlte-streifen.component.html',
  styleUrls: ['./ausgewaehlte-streifen.component.sass']
})
export class AusgewaehlteStreifenComponent implements OnInit {

  filter: string = 'alle-streifen'

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  streifen$: Observable<Streife[]>

  constructor(private _specFacade: SpecFacade, private _modalService: ModalService<AusgewaehlteStreifenModalComponent>) {
    this.streifen$ = this._specFacade.allStreifen$
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

  toggle(status: string) {
    this.filter = status
    this.streifen$ = this._specFacade.getStreifen(status) as Observable<Streife[]>
  }

  async showModal(streife: Streife): Promise<void> {
    const { AusgewaehlteStreifenModalComponent } = await import(
      './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component'
    )
    this._modalService.open(AusgewaehlteStreifenModalComponent, {
      data: {
        title: 'Streife bearbeiten',
        streife
      }
    })
  }

  delete(id: string) {
    this._specFacade.deleteStreife(id)
  }
}
