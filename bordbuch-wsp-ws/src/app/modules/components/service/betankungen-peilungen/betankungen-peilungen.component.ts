import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betankungen-peilungen',
  templateUrl: './betankungen-peilungen.component.html',
  styleUrls: ['./betankungen-peilungen.component.sass']
})
export class BetankungenPeilungenComponent {
  tab: string = 'betankungen'
  constructor() { }

  toggle(tab: string) {
    this.tab = tab
  }

}
