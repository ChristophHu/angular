import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Reparatur } from 'src/app/core/models/reparatur.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { ReparaturModalComponent } from './reparatur-modal/reparatur-modal.component';

@Component({
  selector: 'app-reparaturen',
  templateUrl: './reparaturen.component.html',
  styleUrls: ['./reparaturen.component.sass']
})
export class ReparaturenComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false }) datatableElement: DataTableDirective

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  status: string = 'alle'
  
  reparaturen$!: Observable<Reparatur[] | undefined>
  kat$: Observable<Kat[]>

  constructor(private _modalService: ModalService<ReparaturModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.reparaturen$ = this._specFacade.allReparaturen$
    this.kat$ = this._katFacade.status$
    this.dtTrigger.next({})
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
        "zeroRecords": "No se encontraron registros",
        "emptyTable": "Keine Datensätze vorhanden",
        "paginate": {
          "first": "Erste",
          "previous": "Vorherige",
          "next": "Nächste",
          "last": "Letzte"
        },
      },
    }
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next({})
    this.rerender()
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }

  toggleReparaturen(status: string) {
    this.status = status
    this.reparaturen$ = this._specFacade.getReparaturen(status)
    this._specFacade.getReparaturen(status).subscribe(data => console.log(data))
    // this.rerender()
  }

  test() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      console.log(dtInstance)
      dtInstance.draw();
      console.log(dtInstance)
    })
  }

  reload() {
    this._specFacade.clearReparaturen()
    this._specFacade.loadAllReparaturen()
    this.rerender()
  }
  setOptions() {
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
      },
    }
  }

  rerender() {
    try {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy()
        this.dtTrigger.next({})
      })
    } catch(error) {
      console.error(error)
      // this.setOptions()
    }
    console.log(this.dtOptions)
    console.log(this.dtTrigger)
  }

  async showModal(reparatur?: Reparatur): Promise<void> {
    const { ReparaturModalComponent } = await import(
      './reparatur-modal/reparatur-modal.component'
    )
    if (reparatur) {
      this._modalService.open(ReparaturModalComponent, {
        data: {
          title: 'Reparatur bearbeiten',
          reparatur
        }
      })
    } else {
      this._modalService.open(ReparaturModalComponent, {
        data: {
          title: 'Reparaturauftrag aufnehmen',
          date: new Date().toISOString()
        }
      })
    }
  }

  delete(id: string) {
    this._specFacade.deleteReparatur(id)
  }
}
