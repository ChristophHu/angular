import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.sass']
})
export class UebersichtComponent implements OnInit {

  // barchart
  data: {name: string, series: { name: string, value: number }[] }[];
  barColor = ['#f0f8ff', '#add8e6'];
  domain = [100, 1000];
 
  checklistStatus: any[] = [
    { value: 15, description: 'vollständig' },
    { value: 5, description: 'unvollständig' },
    { value: 3, description: 'relevant' },
  ]
  
  constructor() {
    this.data = [
      {
        name: 'Status',
        series: [
          {name: 'vollständig', value: 2},
          {name: 'unvollständig', value: 1},
          {name: 'aktualisiert', value: 1}
        ],
      }
    ];
  }

  ngOnInit(): void {
    
  }
}
