import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';

@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.sass']
})
export class ChecklisteComponent implements OnInit {

  constructor(private modalService: ModalService<ChecklistItemsComponent>) { }

  ngOnInit(): void {
  }

  async openBetankungModal() {
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
