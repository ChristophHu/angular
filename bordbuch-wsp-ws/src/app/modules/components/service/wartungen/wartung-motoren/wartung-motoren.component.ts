import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
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
    } else {
      this._modalService.open(WartungMotorModalComponent, {
        data: {
          title: 'Wartung hinzufügen'
        }
      })
    }
  }
}
