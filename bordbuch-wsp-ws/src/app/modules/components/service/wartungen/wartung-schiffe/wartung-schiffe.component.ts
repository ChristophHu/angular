import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { WartungSchiffModalComponent } from './wartung-schiff-modal/wartung-schiff-modal.component';

@Component({
  selector: 'app-wartung-schiffe',
  templateUrl: './wartung-schiffe.component.html',
  styleUrls: ['./wartung-schiffe.component.sass']
})
export class WartungSchiffeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // schiffe$!: Observable<Schiff[]>
  zaehlerstaende$!: Observable<Zaehlerstand[]>

  constructor(private _modalService: ModalService<WartungSchiffModalComponent>,  private _specFacade: SpecFacade) {
    // this.schiffe$ = this._katFacade.schiffe$
    this.zaehlerstaende$ = this._specFacade.allZaehlerstaende$
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

  async showModal(zaehlerstand?: Zaehlerstand): Promise<void> {
    const { WartungSchiffModalComponent } = await import(
      './wartung-schiff-modal/wartung-schiff-modal.component'
    )
    if (zaehlerstand) {
      this._modalService.open(WartungSchiffModalComponent, {
        data: {
          title: 'Wartung durchführen',
          zaehlerstand
        }
      })
    } else {
      this._modalService.open(WartungSchiffModalComponent, {
        data: {
          title: 'Wartung hinzufügen'
        }
      })
    }
  }
}
