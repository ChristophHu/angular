import { Component, OnInit } from '@angular/core';

export interface ChecklistItem {
  id: string
  bezeichnung: string
}

@Component({
  selector: 'app-checklist-items',
  templateUrl: './checklist-items.component.html',
  styleUrls: ['./checklist-items.component.sass']
})

export class ChecklistItemsComponent implements OnInit {

  items: ChecklistItem[] = [
    { id: '1', bezeichnung: 'Horn' },
    { id: '2', bezeichnung: 'Positionslicht - Steuerbord' },
    { id: '3', bezeichnung: 'Positionslicht - Backbord' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
