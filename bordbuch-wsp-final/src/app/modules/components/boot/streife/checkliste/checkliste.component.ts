import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';

export interface ChecklistItem {
  id: string
  bezeichnung: string
}

@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.sass']
})
export class ChecklisteComponent implements OnInit {

  fehlendeItems$: Observable<ChecklistItem[]> = from([
    [
      { id: '1', bezeichnung: 'Horn' }
    ]
  ])

  constructor(private modalService: ModalService<ChecklistItemsComponent>) { }

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
