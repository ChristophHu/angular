import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min'
import { Dienststelle } from 'src/app/core/models/dienststelle.model';
import { Instandsetzung } from 'src/app/core/models/Instandsetzung.model';
import { Klarmeldung } from 'src/app/core/models/klarmeldung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-dienststellen-klarmeldung',
  templateUrl: './dienststellen-klarmeldung.component.html',
  styleUrls: ['./dienststellen-klarmeldung.component.sass']
})
export class DienststellenKlarmeldungComponent implements AfterViewInit {

  private dienststellen: string[] = []
  private schiffe: Schiff[] = []
  private klarmeldungen: Klarmeldung[] = []
  private instandsetzungen: Instandsetzung[] = []

  private klar: number[] = []
  private unklar: number[] = []
  private inst: number[] = []

  private data: any[] = []
  private layout: any

  constructor(private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this._katFacade.schiffe$.subscribe((data: Schiff[]) => {
      if (data) {
        this.schiffe = data
        let dienststellen: string[] = []
        data.forEach((el: Schiff) => {
          dienststellen.push(el.dienststelle)
        })
        let dienststellenSet = new Set(dienststellen)
        this.dienststellen = [...dienststellenSet]
        this.build()
        this.basicChart()
      }
    })
    this._specFacade.allKlarmeldungen$.subscribe((data: Klarmeldung[]) => {
      if (data) {
        this.klarmeldungen = data
        this.build()
        this.basicChart()
      }
    })
    this._specFacade.allInstandsetzungen$.subscribe((data: Instandsetzung[]) => {
      if (data) {
        this.instandsetzungen = data
        this.build()
        this.basicChart()
      }
    })
  }

  ngAfterViewInit(): void {
    this.build()
    this.basicChart()
  }

  build() {
    this.klar = new Array(this.dienststellen.length).fill(0)
    this.unklar = new Array(this.dienststellen.length).fill(0)
    this.inst = new Array(this.dienststellen.length).fill(0)

    this.schiffe.forEach((el: Schiff) => {
      const index = this.dienststellen.indexOf(el.dienststelle) // 0
      this.klar[index]+=1

      let unklar: boolean = false
      this.klarmeldungen.forEach((klarmeldung: Klarmeldung) => {
        if (klarmeldung.id_schiff == el.id && klarmeldung.klar == false) unklar = true
      })
      if (unklar) this.unklar[index] += 1

      let inst: boolean = false
      this.instandsetzungen.forEach((instandsetzung: Instandsetzung) => {
        console.log(instandsetzung)
        if (instandsetzung.id_schiff == el.id && instandsetzung.klar == false) inst = true
      })
      if (inst) this.inst[index] += 1
    })
  }

  basicChart() {
    this.data = [
      {
        // klar
        x: [...this.dienststellen],
        y: [...this.klar],
        name: 'Schiffe',
        type: 'bar',
        marker: {
          color: '#3495eb',
          opacity: 0.4
        }
      },
      {
        // unklar
        x: [...this.dienststellen],
        y: [...this.unklar],
        name: 'Unklar',
        type: 'bar',
        marker: {
          color: '#ef553b',
          opacity: 0.4
        }
      },
      {
        // inst
        x: [...this.dienststellen],
        y: [...this.inst],
        name: 'Inst.',
        type: 'bar',
        marker: {
          color: '#665d5d',
          opacity: 0.4
        }
      }
    ]

    this.layout = {
      // title: 'January 2013 Sales Report',
      showtitle: false,
      showlegend: true,
      barmode: 'grouped',

      xaxis: {
        // title
        // title: 'Dienststellen',
        // titlefont: {
        //   family: 'Arial, sans-serif',
        //   size: 18,
        //   color: 'lightgrey'
        // },

        // labels
        // showticklabels: true,
        // tickangle: 45,
        // tickfont: {
        //   family: 'Arial, sans-serif',
        //   size: 14,
        //   color: 'black'
        // },

        // tick
        autotick: true,
        // ticks: 'outside',
        // tick0: 0,
        // dtick: 0.25,
        // ticklen: 8,
        // tickwidth: 1,
        // tickcolor: 'black'
      },
      yaxis: {
        // title
        // title: 'Anzahl von Schiffen',
        // titlefont: {
        //   family: 'Arial, sans-serif',
        //   size: 18,
        //   color: 'lightgrey'
        // },

        // labels
        showticklabels: true,
        // tickangle: 45,
        tickfont: {
          family: 'Arial, sans-serif',
          size: 14,
          color: 'black'
        },
        
        // tick
        // autotick: true,
        // ticks: 'outside',
        // tick0: 0,
        dtick: 1,
        // ticklen: 8,
        // tickwidth: 1,
        // tickcolor: '#ccc'  
      },

      width: 500,
      height: 340,
      margin: {
        t: 20,
        b: 20
      },
    }
    try {
      PlotlyJS.newPlot('dst_klarmeldungen', this.data, this.layout)
    } catch (err) {
      // console.log(err)
    }
  }
}
