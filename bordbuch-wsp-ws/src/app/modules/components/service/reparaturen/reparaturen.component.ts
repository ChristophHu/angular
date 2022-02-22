import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Observable, Subject } from 'rxjs';
import { Kat } from 'src/app/core/models/kat.model';
import { Reparatur } from 'src/app/core/models/reparatur.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { ReparaturModalComponent } from './reparatur-modal/reparatur-modal.component';

@Component({
  selector: 'app-reparaturen',
  templateUrl: './reparaturen.component.html',
  styleUrls: ['./reparaturen.component.sass']
})
export class ReparaturenComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false }) datatableElement: DataTableDirective

  // datatables
  dtOptions: DataTables.Settings = {}

  status: string = 'alle'
  
  reparaturen$!: Observable<Reparatur[] | undefined>
  kat$: Observable<Kat[]>

  constructor(private _modalService: ModalService<ReparaturModalComponent>, private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this.reparaturen$ = this._specFacade.allReparaturen$
    this.kat$ = this._katFacade.status$
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

  toggleReparaturen(status: string) {
    this.status = status
    this.reparaturen$ = this._specFacade.getReparaturen(status)
    this._specFacade.getReparaturen(status).subscribe(data => console.log(data))
  }

  reload() {
    this._specFacade.clearReparaturen()
    this._specFacade.loadAllReparaturen()
  }

  async showModal(reparatur?: Reparatur): Promise<void> {
    const { ReparaturModalComponent } = await import(
      './reparatur-modal/reparatur-modal.component'
    )
    if (reparatur) {
      this._modalService.open(ReparaturModalComponent, {
        data: {
          title: 'Reparatur bearbeiten',
          reparatur
        }
      })
    } else {
      this._modalService.open(ReparaturModalComponent, {
        data: {
          title: 'Reparaturauftrag aufnehmen',
          date: new Date().toISOString()
        }
      })
    }
  }

  delete(id: string) {
    this._specFacade.deleteReparatur(id)
  }
}
