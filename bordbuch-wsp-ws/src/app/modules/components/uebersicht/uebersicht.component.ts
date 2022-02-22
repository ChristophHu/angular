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
        name: 'Row1',
        series: [
          {name: 'Bar1', value: 150},
          {name: 'Bar2', value: 200}
        ],
      },
      {
        name: 'Row2',
        series: [
          {name: 'Bar1', value: 300},
          {name: 'Bar2', value: 400}
        ],
      },
      {
        name: 'Row3',
        series: [
          {name: 'Bar1', value: 500},
          {name: 'Bar2', value: 1000}
        ],
      }
    ];
  }

  ngOnInit(): void {
  }

  

}
