import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Betankung } from 'src/app/core/models/betankung';
import { BetankungService } from 'src/app/core/services/betankung.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { BetankungModalComponent } from './betankung-modal/betankung-modal.component';

@Component({
  selector: 'app-betankungen',
  templateUrl: './betankungen.component.html',
  styleUrls: ['./betankungen.component.sass']
})
export class BetankungenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  betankungen$!: Observable<Betankung[]>

  constructor(private _modalService: ModalService<BetankungModalComponent>, private _specFacade: SpecFacade) {
    this.betankungen$ = this._specFacade.allBetankungen$
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

  async showModal(betankung?: Betankung): Promise<void> {
    const { BetankungModalComponent } = await import(
      './betankung-modal/betankung-modal.component'
    )
    if (betankung) {
      this._modalService.open(BetankungModalComponent, {
        data: {
          title: 'Betankung bearbeiten',
          betankung
        }
      })
    } else {
      this._modalService.open(BetankungModalComponent, {
        data: {
          title: 'Betankung hinzufügen',
          date: new Date().toISOString()
        }
      })
    }
  }

  delete(id: string) {
    this._specFacade.deleteBetankung(id)
  }
}
