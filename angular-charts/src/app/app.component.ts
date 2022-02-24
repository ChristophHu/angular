import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-charts';

  data: {name: string, series: { name: string, value: number }[] }[];
  barColor = ['#a9ce97', '#a5b5de'];
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
    ]
  }
  ngOnInit(): void {
    console.log(this.setStartDate(new Date('2022-02-01')))
    console.log(this.setEndeDate(new Date()))
  }

  

  setStartDate(dt: Date): string {
    dt.setMonth(3)
    dt.setDate(2)
    dt.setHours(-6)
    dt.setMinutes(0)
    dt.setSeconds(0)
    dt.setMilliseconds(0)
    return dt.toISOString().substring(0,16)
  }
  
  setEndeDate(ds: Date): string {
    ds.setHours(17)
    ds.setMinutes(59)
    ds.setSeconds(59)
    ds.setMilliseconds(999)
    return ds.toISOString().substring(0,16)
  }
}
