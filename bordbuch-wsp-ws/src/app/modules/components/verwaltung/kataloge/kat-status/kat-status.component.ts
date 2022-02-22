import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { KatStatusModalComponent } from './kat-status-modal/kat-status-modal.component';

@Component({
  selector: 'app-kat-status',
  templateUrl: './kat-status.component.html',
  styleUrls: ['./kat-status.component.sass']
})
export class KatStatusComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  status$: Observable<Kat[]>

  constructor(private _modalService: ModalService<KatStatusModalComponent>, private _katFacade: KatFacade) {
    this.status$ = _katFacade.status$
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

  async showModal(kat?: Kat): Promise<void> {
    const { KatStatusModalComponent } = await import(
      './kat-status-modal/kat-status-modal.component'
    )
    if (kat) {
      this._modalService.open(KatStatusModalComponent, {
        data: {
          title: 'Reparatur-Status bearbeiten',
          kat
        }
      })
    } else {
      this._modalService.open(KatStatusModalComponent, {
        data: {
          title: 'Reparatur-Status hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deleteStatus(id)
  }
}
