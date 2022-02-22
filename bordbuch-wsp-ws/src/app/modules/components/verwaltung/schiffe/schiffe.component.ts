import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { ChecklisteModalComponent } from './checkliste-modal/checkliste-modal.component';
import { MotorModalComponent } from './motor-modal/motor-modal.component';
import { SchiffModalComponent } from './schiff-modal/schiff-modal.component';
import { TankModalComponent } from './tank-modal/tank-modal.component';

@Component({
  selector: 'app-schiffe',
  templateUrl: './schiffe.component.html',
  styleUrls: ['./schiffe.component.sass']
})
export class SchiffeComponent implements OnInit {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  schiffe$: Observable<Schiff[]>

  constructor(
    private _modalService: ModalService<SchiffModalComponent>,
    private _modalServiceChecklist: ModalService<ChecklisteModalComponent>,
    private _modalServiceMotor: ModalService<MotorModalComponent>,
    private _modalServiceTank: ModalService<TankModalComponent>,
    private _katFacade: KatFacade) {
      this.schiffe$ = _katFacade.schiffe$
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
  async showModal(schiff?: Schiff): Promise<void> {
    const { SchiffModalComponent } = await import(
      './schiff-modal/schiff-modal.component'
    )
    if (schiff) {
      this._modalService.open(SchiffModalComponent, {
        data: {
          title: 'Schiff bearbeiten',
          schiff
        }
      })
    } else {
      this._modalService.open(SchiffModalComponent, {
        data: {
          title: 'Schiff hinzufügen'
        }
      })
    }
  }

  async showChecklistModal(schiff: Schiff): Promise<void> {
    const { ChecklisteModalComponent } = await import(
      './checkliste-modal/checkliste-modal.component'
    )

    this._modalServiceChecklist.open(ChecklisteModalComponent, {
      data: {
        title: 'Checkliste bearbeiten',
        schiff
      }
    })
  }

  async showMotorModal(schiff: Schiff): Promise<void> {
    const { MotorModalComponent } = await import(
      './motor-modal/motor-modal.component'
    )

    this._modalServiceMotor.open(MotorModalComponent, {
      data: {
        title: 'Motoren',
        schiff
      }
    })
  }

  async showTankModal(schiff: Schiff): Promise<void> {
    const { TankModalComponent } = await import(
      './tank-modal/tank-modal.component'
    )

    this._modalServiceTank.open(TankModalComponent, {
      data: {
        title: 'Tank',
        schiff
      }
    })
  }

  delete(id: string) {
    this._katFacade.deleteSchiff(id)
  }
}
