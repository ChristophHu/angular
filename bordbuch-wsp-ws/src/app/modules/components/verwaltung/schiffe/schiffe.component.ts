import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { environment } from 'src/environments/environment';
import { ChecklisteModalComponent } from './checkliste-modal/checkliste-modal.component';
import { MotorModalComponent } from './motor-modal/motor-modal.component';
import { QrcodeModalComponent } from './qrcode-modal/qrcode-modal.component';
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
    private _modalServiceQRCode: ModalService<QrcodeModalComponent>,
    private _modalServiceTank: ModalService<TankModalComponent>,
    private _katFacade: KatFacade) {
      this.schiffe$ = _katFacade.schiffe$
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

  async showQRCodeModal(schiff: Schiff): Promise<void> {
    const { QrcodeModalComponent } = await import(
      './qrcode-modal/qrcode-modal.component'
    )

    this._modalServiceQRCode.open(QrcodeModalComponent, {
      data: {
        title: 'QR-Code',
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
