import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Checklist } from 'src/app/core/models/checklist.model';
import { AppService } from 'src/app/core/services/app.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { ChecklisteModalComponent } from './checkliste-modal/checkliste-modal.component';

@Component({
  selector: 'app-checklisten',
  templateUrl: './checklisten.component.html',
  styleUrls: ['./checklisten.component.sass']
})
export class ChecklistenComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  checklists$!: Observable<Checklist[]>

  constructor(private _appService: AppService, private _modalService: ModalService<ChecklisteModalComponent>, private _specFacade: SpecFacade) {
    this.checklists$ = this._specFacade.allChecklists$
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

  async showModal(checklist: Checklist): Promise<void> {
    const { ChecklisteModalComponent } = await import(
      './checkliste-modal/checkliste-modal.component'
    )
    this._modalService.open(ChecklisteModalComponent, {
      data: {
        title: 'Checkliste bearbeiten',
        checklist
      }
    })
  }

  delete(checklist: Checklist) {
    this._specFacade.deleteChecklist(checklist.id_schiff, checklist.datum)
  }
}
