import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Peilung } from 'src/app/core/models/peilung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { PeilungModalComponent } from './peilung-modal/peilung-modal.component';

@Component({
  selector: 'app-peilungen',
  templateUrl: './peilungen.component.html',
  styleUrls: ['./peilungen.component.sass']
})
export class PeilungenComponent implements OnInit {

  filterForm: FormGroup

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  schiffe$: Observable<Schiff[]>
  peilungen$!: Observable<Peilung[]>

  startDate: Date = new Date()
  endeDate: Date = new Date()

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<PeilungModalComponent>, private _specFacade: SpecFacade, private _katFacade: KatFacade) {
    this.schiffe$ = _katFacade.schiffe$
    this.peilungen$ = this._specFacade.allPeilungen$
    this._specFacade.allPeilungen$.subscribe((data: any) => console.log(data))

    this.filterForm = this._formBuilder.group({
      id_schiff: [],
      name: [],
      startDate: [],
      endeDate: []
    })
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

  selectShip(name: string) {
    this._katFacade.getIdByShip(name).subscribe((id: any) => {
      this.filterForm.patchValue({ id_schiff: id })
      this._specFacade.loadPeilungenById(id)
      this._specFacade.loadTanks(id)
    })
  }
  setStartDate() {
    console.log(new Date().toISOString().substring(0,16))
    this.filterForm.patchValue({ startDate: '23.02.2022'}) //new Date().toISOString().substring(0,16) })
  }
  setEndeDate() {
    console.log(new Date().toISOString().substring(0,16))
    this.filterForm.patchValue({ endeDate: '23.02.2022'}) //new Date().toISOString().substring(0,16) })
  }

  async showModal(peilung?: Peilung): Promise<void> {
    const { PeilungModalComponent } = await import(
      './peilung-modal/peilung-modal.component'
    )
    if (peilung) {
      this._modalService.open(PeilungModalComponent, {
        data: {
          title: 'Peilung bearbeiten',
          peilung
        }
      })
    } else {
      this._modalService.open(PeilungModalComponent, {
        data: {
          title: 'Peilung hinzufügen',
          date: new Date().toISOString()
        }
      })
    }
  }

  delete(id: string) {
    this._specFacade.deletePeilung(id)
  }
}
