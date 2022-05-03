import { Component, OnInit } from '@angular/core';
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
export class DienststellenKlarmeldungComponent implements OnInit {

  private dienststellen: string[] = [] //['WSP Ost', 'WSP Mitte', 'WSP West']
  private schiffe: Schiff[] = [
    // { id: '2', name: 'WSP30 Sturmmöve', dienststelle: 'WSP Ost' },
    // { id: '4', name: 'WSP31 Albatros', dienststelle: 'WSP Ost' },
    // { id: '6', name: 'WSP20 Lietze', dienststelle: 'WSP Mitte' },
    // { id: '8', name: 'WSP22 Spree', dienststelle: 'WSP Mitte' },
    // { id: '10', name: 'WSP10 Wannsee', dienststelle: 'WSP West' }
  ]
  private klarmeldungen: Klarmeldung[] = [
    // { id: '1', id_schiff: '2', klar: false }
  ]

  private klar: number[] = []
  private unklar: number[] = []

  public graph: any

  constructor(private _katFacade: KatFacade, private _specFacade: SpecFacade) {
    this._katFacade.dienststellen$.subscribe((data: Dienststelle[]) => {
      if (data) {
        data.forEach((el: Dienststelle) => {
          this.dienststellen.push(el.bezeichnung)
        })
      }
    })
    this._katFacade.schiffe$.subscribe((data: Schiff[]) => {
      if (data) {
        this.schiffe = data
      }
    })
    this._specFacade.allKlarmeldungen$.subscribe((data: Klarmeldung[]) => {
      if (data) {
        this.klarmeldungen = data
      }
    })
  }

  ngOnInit(): void {
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
    const data: any[] = [
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

    const layout: any = {
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

    PlotlyJS.newPlot('dst_klarmeldungen', data, layout)
  }
}
