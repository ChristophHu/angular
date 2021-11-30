import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wartung',
  templateUrl: './wartung.component.html',
  styleUrls: ['./wartung.component.sass']
})
export class WartungComponent implements OnInit {

  schiff: any[] = [
    { id: '1', date: '29.11.2022' }
  ]
  motor: any[] = [
    { id: '1', bezeichnung: 'MOTOR1', betriebsstunden: '50:00' }
  ]

  wartung_schiff: any[] = [
    { id: '1', id_schiff: '1', date: '29.11.2022' }
  ]
  wartung_motor: any[] = [
    { id: '1', id_motor: '1', date: '29.11.2022' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
