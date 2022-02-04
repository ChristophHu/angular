import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standort } from 'src/app/core/models/standort.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { AusgewaehlterStandortModalComponent } from '../ausgewaehlter-standort-modal/ausgewaehlter-standort-modal.component';

@Component({
  selector: 'tab-standorte',
  templateUrl: './tab-standorte.component.html',
  styleUrls: ['./tab-standorte.component.sass']
})
export class TabStandorteComponent implements OnInit {
  @Output() hovered = new EventEmitter()
  
  standorte: Standort[] = []
  id_streife: string

  constructor(private _route: ActivatedRoute, private _modalService: ModalService<AusgewaehlterStandortModalComponent>, private _specFacade: SpecFacade) {
    this.id_streife = this._route.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this._specFacade.allStandorte$.subscribe(standorte => {
      if (standorte) {
        this.standorte = standorte
      }
    })
  }

  async showModal(standort?: Standort): Promise<void> {
    const { AusgewaehlterStandortModalComponent } = await import(
      '../ausgewaehlter-standort-modal/ausgewaehlter-standort-modal.component'
    )
    if (standort) {
      this._modalService.open(AusgewaehlterStandortModalComponent, {
        data: {
          title: 'Position bearbeiten',
          standort
        }
      })
    } else {
      this._specFacade.getStreifeById(this.id_streife).subscribe(streife => {
        this._modalService.open(AusgewaehlterStandortModalComponent, {
          data: {
            title: 'Position hinzufügen',
            date: new Date().toISOString(),
            streife
          }
        })
      })
      
    }
  }

  delete(id: string) {
    this._specFacade.deleteStandort(id)
  }

  hoverPosition(id: string) {
    this.hovered.emit(id)
  }
}
