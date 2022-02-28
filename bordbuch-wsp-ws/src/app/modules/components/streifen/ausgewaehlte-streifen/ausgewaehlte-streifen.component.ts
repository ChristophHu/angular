import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Streife } from 'src/app/core/models/streife.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { AusgewaehlteStreifenModalComponent } from './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component';

@Component({
  selector: 'app-ausgewaehlte-streifen',
  templateUrl: './ausgewaehlte-streifen.component.html',
  styleUrls: ['./ausgewaehlte-streifen.component.sass']
})
export class AusgewaehlteStreifenComponent implements OnInit {
  filterStreife: string = 'alle'
  status$: string[] = ['vorbereitend', 'aktiv', 'beendet']

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  filterForm: FormGroup
  filterZeit: string = 'year'
  showfilter: boolean = false

  streifen$: Observable<Streife[]>

  constructor(private _formBuilder: FormBuilder, private _specFacade: SpecFacade, private _modalService: ModalService<AusgewaehlteStreifenModalComponent>) {
    this.streifen$ = this._specFacade.allStreifen$

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

  toggle(status: string) {
    this.filterStreife = status
    if (status == 'alle') {
      this.streifen$ = this._specFacade.allStreifen$
    } else {
      this.streifen$ = this._specFacade.getStreifen(status) as Observable<Streife[]>
    }
  }

  toggleFilter(filter: string) {
    this.filterZeit = filter
    if (filter != '') {
      const startdate = getLocalISO(filter)
      const enddate = getLocalISO('')
      this.filterForm.value.startdate = startdate
      this.filterForm.value.enddate = enddate
      this._specFacade.loadAllStreifen({ startdate, enddate })
    } else {
      this._specFacade.loadAllStreifen({ startdate: this.filterForm.value.startdate, enddate: this.filterForm.value.enddate })
    }
  }

  reload() {
    this._specFacade.loadAllStreifen({ startdate: '', enddate: ''})
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
