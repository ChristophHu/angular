import { Component } from '@angular/core';

@Component({
  selector: 'app-wartungen',
  templateUrl: './wartungen.component.html',
  styleUrls: ['./wartungen.component.sass']
})
export class WartungenComponent {
  wartung: string = 'motoren'
  constructor() { }

  toggle(wartung: string) {
    this.wartung = wartung
  }
}
