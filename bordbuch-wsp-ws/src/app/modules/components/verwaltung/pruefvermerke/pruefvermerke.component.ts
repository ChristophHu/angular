import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pruefvermerk } from 'src/app/core/models/pruefvermerk.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { PruefvermerkModalComponent } from './pruefvermerk-modal/pruefvermerk-modal.component';

@Component({
  selector: 'app-pruefvermerke',
  templateUrl: './pruefvermerke.component.html',
  styleUrls: ['./pruefvermerke.component.sass']
})
export class PruefvermerkeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  pruefvermerke$: Observable<Pruefvermerk[]>

  constructor(private _modalService: ModalService<PruefvermerkModalComponent>, private _katFacade: KatFacade) {
    this.pruefvermerke$ = _katFacade.pruefvermerke$
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

  async showModal(pruefvermerk?: Pruefvermerk): Promise<void> {
    const { PruefvermerkModalComponent } = await import(
      './pruefvermerk-modal/pruefvermerk-modal.component'
    )
    if (pruefvermerk) {
      this._modalService.open(PruefvermerkModalComponent, {
        data: {
          title: 'Prüfvermerk bearbeiten',
          pruefvermerk
        }
      })
    } else {
      this._modalService.open(PruefvermerkModalComponent, {
        data: {
          title: 'Prüfvermerk hinzufügen'
        }
      })
    }
  }

  delete(id: string) {
    this._katFacade.deletePruefvermerk(id)
  }
}
