import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min'
import { Dienststelle } from 'src/app/core/models/dienststelle.model';
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

  private klar: number[] = []
  private unklar: number[] = []

  private data: any[] = []
  private layout: any

  constructor(private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    console.log('construct')
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
  }

  ngAfterViewInit(): void {
    this.build()
    this.basicChart()
  }

  build() {
    this.klar = new Array(this.dienststellen.length).fill(0)
    this.unklar = new Array(this.dienststellen.length).fill(0)

    this.schiffe.forEach((el: Schiff) => {
      const index = this.dienststellen.indexOf(el.dienststelle) // 0
      this.klar[index]+=1

      let unklar: boolean = false
      this.klarmeldungen.forEach((klar: Klarmeldung) => {
        if (klar.id_schiff == el.id) unklar = true
      })
      if (unklar) this.unklar[index] += 1
    })
  }

  basicChart() {
    this.data = [
      {
        // klar
        x: [...this.dienststellen],
        y: [...this.klar],
        name: '',
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
        name: '',
        type: 'bar',
        marker: {
          color: '#ef553b',
          opacity: 0.4
        }
      }
    ]

    this.layout = {
      // title: 'January 2013 Sales Report',
      showtitle: false,
      showlegend: false,
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
    PlotlyJS.newPlot('dst_klarmeldungen', this.data, this.layout)
  }
}
