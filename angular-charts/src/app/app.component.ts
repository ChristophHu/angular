import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-charts';

  filter: string = 'jahr'

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
    // console.log(`letztes Jahr:  ${this.getLastYearLocalISO()}`)
    // console.log(`dieses Jahr:   ${this.getYearLocalISO()}`)
    // console.log(`letzter Monat: ${this.getLastMonthLocalISO()}`)
    // console.log(`dieser Monat:  ${this.getMonthLocalISO()}`)
    // console.log(`letzte Woche:  ${this.getLastWeekLocalISO()}`)
    // console.log(`diese Woche:   ${this.getWeekLocalISO()}`)
    // console.log(`gestern:       ${this.getYesterdayLocalISO()}`)
    // console.log(`heute:         ${this.getTodayLocalISO()}`)

    // const year = this.year()
    // console.log(`jahr: ${new Date(year)}`)
    // const lastmonth = this.lastmonth(new Date())
    // console.log(`letzter monat: ${new Date(lastmonth)}`)
    // const month = this.month(new Date())
    // console.log(`monat: ${new Date(month)}`)

    // const lastweek = this.lastweek(new Date())
    // console.log(`letzte woche: ${new Date(lastweek)}`)

    // const week = this.week(new Date())
    // console.log(`woche: ${new Date(week)}`)

    // const yesterday = this.yesterday(new Date())
    // console.log(`gestern: ${new Date(yesterday)}`)

    // const today = this.today(new Date())
    // console.log(`heute: ${new Date(today)}`)

    // const tomorrow = this.tomorrow(new Date())
    // console.log(`morgen: ${new Date(tomorrow).toISOString()}`)

  }

  toggleFilter(filter: string) {
    this.filter = filter
    // this.reparaturen$ = this._specFacade.getReparaturen(status)
    // this._specFacade.getReparaturen(status).subscribe(data => console.log(data))
    console.log(this.getLocalISO(filter, true))
  }

  getLocalISO(val: string = '', iso: boolean): Date | string {
    let date: Date | string
    switch(val) {
      case 'lastyear':
        date = new Date(this.lastyear() - this.timezoneoffset())
        break

      case 'year':
        date = new Date(this.year() - this.timezoneoffset())
        break

      case 'lastmonth':
        date = new Date(this.lastmonth() - this.timezoneoffset())
        break

      case 'month':
        date = new Date(this.month() - this.timezoneoffset())
        break

      case 'lastweek':
        date = new Date(this.lastweek() - this.timezoneoffset())
        break

      case 'week':
        date = new Date(this.week() - this.timezoneoffset())
        break

      case 'yesterday':
        date = new Date(this.yesterday() - this.timezoneoffset())
        break

      case 'today':
        date = new Date(this.today() - this.timezoneoffset())
        break

      case 'tomorrow':
        date = new Date(this.tomorrow() - this.timezoneoffset())
        break

      default:
        date = new Date()
    }
    if (iso) date = date.toISOString().slice(0, -1)

    return date
  }

  // getLastYearLocalISO(): string {
  //   return new Date(this.lastyear() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getYearLocalISO(): string {
  //   return new Date(this.year() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getLastMonthLocalISO(): string {
  //   return new Date(this.lastmonth() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getMonthLocalISO(): string {
  //   return new Date(this.month() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getLastWeekLocalISO(): string {
  //   return new Date(this.lastweek() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getWeekLocalISO(): string {
  //   return new Date(this.week() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getYesterdayLocalISO(): string {
  //   return new Date(this.yesterday() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }
  // getTodayLocalISO(): string {
  //   return new Date(this.today() - this.timezoneoffset()).toISOString().slice(0, -1)
  // }

  private timezoneoffset(): any {
    return new Date().getTimezoneOffset() * 60000
  }
  private lastyear(): any {
    return new Date(new Date().getFullYear()-1, 0, 1)
  }
  private year(): any {
    return new Date(new Date().getFullYear(), 0, 1)
  }
  private lastmonth(): any {
    return new Date(new Date().getFullYear(), new Date().getMonth()-1, 1)
  }
  private month(): any {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  }
  private lastweek(): any {
    // Sunday - Saturday : 0 - 6
    let d = new Date()
    const diff = d.getDate() - d.getDay() + (d.getDay() == 0 ? -6:1) - 7
    d.setDate(diff)
    d.setHours(0,0,0,0)
    return d
  }
  private week(): any {
    // Sunday - Saturday : 0 - 6
    let d = new Date()
    const diff = d.getDate() - d.getDay() + (d.getDay() == 0 ? -6:1)
    d.setDate(diff)
    d.setHours(0,0,0,0)
    return d
  }
  private yesterday(): number {
    return new Date().setHours(-24,0,0,0)
  }
  private today(): number {
    return new Date().setHours(0,0,0,0)
  }
  private tomorrow(): number {
    return new Date().setHours(24,0,0,0)
  }
}
