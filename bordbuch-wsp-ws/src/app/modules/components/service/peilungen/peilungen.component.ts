import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Peilung } from 'src/app/core/models/peilung.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { PeilungModalComponent } from './peilung-modal/peilung-modal.component';

@Component({
  selector: 'app-peilungen',
  templateUrl: './peilungen.component.html',
  styleUrls: ['./peilungen.component.sass']
})
export class PeilungenComponent implements OnInit {
  @Input() showfilter: boolean = false

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  peilungen$!: Observable<Peilung[]>

  filterForm: FormGroup
  filter: string = 'year'

  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<PeilungModalComponent>, private _specFacade: SpecFacade) {
    this.peilungen$ = this._specFacade.allPeilungen$

    this.filterForm = this._formBuilder.group({
      startdate: [],
      enddate: []
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers', 
      pageLength: 10,     // Anzahl von Elementen pro Seite
      paging    : true,   // (default: true)
      responsive: true,   // (default: true)
      ordering  : true,   // Sortierung (default: true)
      processing: true,   // (default: true)
      autoWidth : true,   // (default: true)
      retrieve  : true,   // (default: true)
      info      : false,  // Anzahl von Elementen (default: true)
      language  : {
        "url": environment.base_href + "assets/data/datatables.german.json" // "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
      }
    }
  }

  toggleFilter(filter: string) {
    this.filter = filter
    if (filter != '') {
      const startdate = getLocalISO(filter)
      const enddate = getLocalISO('')

      this.filterForm.value.startdate = startdate
      this.filterForm.value.enddate = enddate
      this._specFacade.loadAllPeilungen({ startdate, enddate })
    } else {
      this._specFacade.loadAllPeilungen({ startdate: this.filterForm.value.startdate, enddate: this.filterForm.value.enddate })
    }
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
