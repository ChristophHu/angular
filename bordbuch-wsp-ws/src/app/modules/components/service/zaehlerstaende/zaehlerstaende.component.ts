import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { ZaehlerstandModalComponent } from './zaehlerstand-modal/zaehlerstand-modal.component';

@Component({
  selector: 'app-zaehlerstaende',
  templateUrl: './zaehlerstaende.component.html',
  styleUrls: ['./zaehlerstaende.component.sass']
})
export class ZaehlerstaendeComponent implements OnInit {
   // datatables
   dtOptions: DataTables.Settings = {}
   dtTrigger: Subject<any> = new Subject()

   zaehlerstaende$!: Observable<Zaehlerstand[]>

   constructor(private _modalService: ModalService<ZaehlerstandModalComponent>, private _specFacade: SpecFacade) {
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

   async showModal(zaehlerstand?: Zaehlerstand): Promise<void> {
      const { ZaehlerstandModalComponent } = await import(
         './zaehlerstand-modal/zaehlerstand-modal.component'
      )
      if (zaehlerstand) {
         this._modalService.open(ZaehlerstandModalComponent, {
            data: {
               title: 'Zählerstand bearbeiten',
               zaehlerstand
            }
         })
      } else {
         this._modalService.open(ZaehlerstandModalComponent, {
            data: {
               title: 'Zählerstand hinzufügen',
               date: new Date().toISOString()
            }
         })
      }
   }

   // delete(id: string) {
   //    this._specFacade.deleteZaehlerstand(id)
   // }
}
