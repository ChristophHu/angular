import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { KatPruefvermerkkategorieModalComponent } from './kat-pruefvermerkkategorie-modal/kat-pruefvermerkkategorie-modal.component';

@Component({
  selector: 'app-kat-pruefvermerkkategorien',
  templateUrl: './kat-pruefvermerkkategorien.component.html',
  styleUrls: ['./kat-pruefvermerkkategorien.component.sass']
})
export class KatPruefvermerkkategorienComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  pruefvermerkkategorien$: Observable<Kat[]>

  constructor(private _modalService: ModalService<KatPruefvermerkkategorieModalComponent>, private _katFacade: KatFacade) {
    this.pruefvermerkkategorien$ = _katFacade.pruefvermerkkategorien$
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
  
  async showModal(kat?: Kat): Promise<void> {
    const { KatPruefvermerkkategorieModalComponent } = await import(
      './kat-pruefvermerkkategorie-modal/kat-pruefvermerkkategorie-modal.component'
    )
    if (kat) {
      this._modalService.open(KatPruefvermerkkategorieModalComponent, {
        data: {
          title: 'Prüfvermerkkategorie bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatPruefvermerkkategorieModalComponent, {
        data: {
          title: 'Prüfvermerkkategorie hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deletePruefvermerkkategorie(id)
  }
}
