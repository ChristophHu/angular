import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Streife } from 'src/app/core/models/streife.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { AusgewaehlteStreifenModalComponent } from './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component';

@Component({
  selector: 'app-ausgewaehlte-streifen',
  templateUrl: './ausgewaehlte-streifen.component.html',
  styleUrls: ['./ausgewaehlte-streifen.component.sass']
})
export class AusgewaehlteStreifenComponent implements OnInit {
  filter: string = 'alle'
  status$: string[] = ['vorbereitend', 'aktiv', 'beendet']

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  streifen$: Observable<Streife[]>

  constructor(private _specFacade: SpecFacade, private _modalService: ModalService<AusgewaehlteStreifenModalComponent>) {
    this.streifen$ = this._specFacade.allStreifen$
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

  toggle(status: string) {
    this.filter = status
    if (status == 'alle') {
      this.streifen$ = this._specFacade.allStreifen$
    } else {
      this.streifen$ = this._specFacade.getStreifen(status) as Observable<Streife[]>
    }
  }

  reload() {
    console.log(`reload streifen`)
    this._specFacade.loadAllStreifen()
  }

  async showModal(streife: Streife): Promise<void> {
    const { AusgewaehlteStreifenModalComponent } = await import(
      './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component'
    )
    this._modalService.open(AusgewaehlteStreifenModalComponent, {
      data: {
        title: 'Streife bearbeiten',
        streife
      }
    })
  }

  delete(id: string) {
    this._specFacade.deleteStreife(id)
  }
}
