import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Dienststelle } from 'src/app/core/models/dienststelle.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { KatDienststelleModalComponent } from './kat-dienststelle-modal/kat-dienststelle-modal.component';

@Component({
  selector: 'app-kat-dienststellen',
  templateUrl: './kat-dienststellen.component.html',
  styleUrls: ['./kat-dienststellen.component.sass']
})
export class KatDienststellenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()
  
  // dienststellen: any = [
  //   {
  //     id: "1",
  //     bezeichnung: "DST NORD",
  //     position: {
  //       longitude:2.2000000476837158,
  //       latitude:1.1000000238418579
  //     },
  //     adresse: {
  //       strasse: "AA",
  //       hausnummer: "1A",
  //       postleitzahl: "11111",
  //       ort:"ORT1"
  //     },
  //     mailadresse:"A@A.A"},
  // ]
  dienststellen$: Observable<Dienststelle[]>

  constructor(private _modalService: ModalService<KatDienststelleModalComponent>, private _katFacade: KatFacade) {
    this.dienststellen$ = _katFacade.dienststellen$
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
  
  async showModal(dienststelle?: Dienststelle): Promise<void> {
    const { KatDienststelleModalComponent } = await import(
      './kat-dienststelle-modal/kat-dienststelle-modal.component'
    )
    if (dienststelle) {
      this._modalService.open(KatDienststelleModalComponent, {
        data: {
          title: 'Dienststelle bearbeiten',
          dienststelle
        }
      })
    } else {
      this._modalService.open(KatDienststelleModalComponent, {
        data: {
          title: 'Dienststelle hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deleteDienststelle(id)
  }
}
