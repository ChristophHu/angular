import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { KatKennungModalComponent } from './kat-kennung-modal/kat-kennung-modal.component';

@Component({
  selector: 'app-kat-kennungen',
  templateUrl: './kat-kennungen.component.html',
  styleUrls: ['./kat-kennungen.component.sass']
})
export class KatKennungenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  kennungen$: Observable<Kat[]>

  constructor(private _modalService: ModalService<KatKennungModalComponent>, private _katFacade: KatFacade) { 
    this.kennungen$ = _katFacade.kennungen$
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
    // this._betankungService.getBetankungen()
  }
  
  async showModal(kat?: Kat): Promise<void> {
    const { KatKennungModalComponent } = await import(
      './kat-kennung-modal/kat-kennung-modal.component'
    )
    if (kat) {
      this._modalService.open(KatKennungModalComponent, {
        data: {
          title: 'Kennung bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatKennungModalComponent, {
        data: {
          title: 'Kennung hinzufügen'
        }
      })
    }
  }
  
  delete(id: string) {
    this._katFacade.deleteKennung(id)
  }
}
