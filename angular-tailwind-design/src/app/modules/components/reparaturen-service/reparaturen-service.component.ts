import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ReparaturComponent } from './reparatur/reparatur.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ReparaturService } from '../../../core/services/reparatur.service';
import { Reparatur } from '../../../core/models/reparatur';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-reparaturen-service',
  templateUrl: './reparaturen-service.component.html',
  styleUrls: ['./reparaturen-service.component.sass']
})
export class ReparaturenServiceComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTriggerReparaturen: Subject<any> = new Subject()
  dtTriggerSchaeden: Subject<any> = new Subject()

  // data
  reparaturen$: Observable<Reparatur[]>
  schaeden$: Observable<Reparatur[]>
  subscriptionReparaturen!: Subscription
  subscriptionSchaeden!: Subscription

  constructor(private modalService: ModalService<ReparaturComponent>, private reparaturService: ReparaturService) {
    this.reparaturen$ = this.reparaturService.reparaturen$
    this.schaeden$ = this.reparaturService.schaeden$
  }

  ngOnInit(): void {
    // datatables
    this.dtOptions = { 
      "pagingType": 'full_numbers', 
      "pageLength": 10, 
      "responsive": true,
      "lengthMenu": [ 10, 15, 20, 50, 100, 500 ],
      // "paging"  : false,
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      // "scrollY"   :'150px',
      "scrollX": false,
      "scrollCollapse": true,
      // "autoWidth" : true,
      "retrieve"  : true,
      "order": [[ 2, "desc" ]],
      "deferRender":    true,
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

    // data
    this.subscriptionReparaturen = this.reparaturen$.subscribe(data => {
      this.dtTriggerReparaturen.next()
    })
    this.subscriptionSchaeden = this.schaeden$.subscribe(data => {
      this.dtTriggerSchaeden.next()
    })

    this.reparaturService.getReparaturen()
  }

  async showModal(status?: string, id?: string): Promise<void> {
    let reparatur: Reparatur | undefined
    const { ReparaturComponent } = await import(
      './reparatur/reparatur.component'
    )

    if (id) {
      if (status == 'schaden') {
        reparatur = this.reparaturService._dataStore.schaeden.find(el => el.id == id)
      } else {
        reparatur = this.reparaturService._dataStore.reparaturen.find(el => el.id == id)
      }
      this.modalService.open(ReparaturComponent, {
        data: {
          title: 'Schaden bearbeiten',
          reparatur
        }
      })
    } else {
      this.modalService.open(ReparaturComponent, {
        data: {
          title: 'Schaden aufnehmen'
        }
      })
    }
  }
}
