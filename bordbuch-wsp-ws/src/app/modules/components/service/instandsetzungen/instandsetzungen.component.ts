import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Klarmeldung } from 'src/app/core/models/klarmeldung.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { InstandsetzungModalComponent } from './instandsetzung-modal/instandsetzung-modal.component';

@Component({
  selector: 'app-instandsetzungen',
  templateUrl: './instandsetzungen.component.html',
  styleUrls: ['./instandsetzungen.component.sass']
})
export class InstandsetzungenComponent implements OnInit {
// datatables
dtOptions: DataTables.Settings = {}
dtTrigger: Subject<any> = new Subject()

allInstandsetzungen$!: Observable<Klarmeldung[]>

constructor(private _modalService: ModalService<InstandsetzungModalComponent>, private _specFacade: SpecFacade) {
  this.allInstandsetzungen$ = this._specFacade.allInstandsetzungen$
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

async showModal(klarmeldung?: Klarmeldung): Promise<void> {
  const { InstandsetzungModalComponent } = await import(
    './instandsetzung-modal/instandsetzung-modal.component'
  )

  if (klarmeldung) {
    this._modalService.open(InstandsetzungModalComponent, {
      data: {
        title: 'Instandsetzung bearbeiten',
        klarmeldung
      }
    })
  } else {
    this._modalService.open(InstandsetzungModalComponent, {
      data: {
        title: 'Instandsetzung hinzufügen'
      }
    })
  }
}

delete(klarmeldung: Klarmeldung) {
  this._specFacade.deleteKlarmeldung(klarmeldung.id!)
}
}
