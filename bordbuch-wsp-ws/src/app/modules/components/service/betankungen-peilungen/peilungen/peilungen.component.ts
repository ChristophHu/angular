import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Peilung } from 'src/app/core/models/peilung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
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
        "url": environment.base_href + "assets/data/datatables.german.json" // "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
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
    this.filterForm.patchValue({ startDate: getLocalISO('now') })
  }
  setEndeDate() {
    this.filterForm.patchValue({ endeDate: getLocalISO('now') })
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
