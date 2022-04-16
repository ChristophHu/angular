import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';

@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.sass']
})
export class ChecklisteComponent implements OnInit {

  unchecked$!: Observable<Checklistitem[]>

  constructor(private _specFacade: SpecFacade, private modalService: ModalService<ChecklistItemsComponent>) {
    this.unchecked$ = this._specFacade.checklistItemsUnchecked$
  }

  ngOnInit(): void {
  }

  async openChecklisteModal() {
    const { ChecklistItemsComponent } = await import(
      './checklist-items/checklist-items.component'
    )

      this.modalService.open(ChecklistItemsComponent, {
        data: {
          title: 'Checkliste kontrollieren',
        }
      }
    )
  }
}
