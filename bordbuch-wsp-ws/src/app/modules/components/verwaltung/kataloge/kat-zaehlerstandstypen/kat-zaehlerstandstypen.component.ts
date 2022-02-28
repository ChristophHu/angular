import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { KatZaehlerstandstypModalComponent } from './kat-zaehlerstandstyp-modal/kat-zaehlerstandstyp-modal.component';

@Component({
  selector: 'app-kat-zaehlerstandstypen',
  templateUrl: './kat-zaehlerstandstypen.component.html',
  styleUrls: ['./kat-zaehlerstandstypen.component.sass']
})
export class KatZaehlerstandstypenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  // kat: Kat[] = [
  //   {id: "1", bezeichnung: "MOTOR1"},
  //   {id: "2", bezeichnung: "MOTOR2"},
  //   {id: "3", bezeichnung: "EINSATZZEIT"},
  //   {id: "6", bezeichnung: "MOTOR3"}
  // ]

  zaehlerstandstypen$: Observable<Zaehlerstandstyp[]>

  constructor(private _modalService: ModalService<KatZaehlerstandstypModalComponent>, private _katFacade: KatFacade) {
    this.zaehlerstandstypen$ = _katFacade.zaehlerstandstypen$
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
  
  async showModal(kat?: Zaehlerstandstyp): Promise<void> {
    const { KatZaehlerstandstypModalComponent } = await import(
      './kat-zaehlerstandstyp-modal/kat-zaehlerstandstyp-modal.component'
    )
    if (kat) {
      this._modalService.open(KatZaehlerstandstypModalComponent, {
        data: {
          title: 'Zählerstandstyp bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatZaehlerstandstypModalComponent, {
        data: {
          title: 'Zählerstandstyp hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deleteZaehlerstandstyp(id)
  }
}
