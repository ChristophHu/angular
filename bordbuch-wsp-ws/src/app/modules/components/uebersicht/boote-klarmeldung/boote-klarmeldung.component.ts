import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min'
import { Klarmeldung } from 'src/app/core/models/klarmeldung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-boote-klarmeldung',
  templateUrl: './boote-klarmeldung.component.html',
  styleUrls: ['./boote-klarmeldung.component.sass']
})
export class BooteKlarmeldungComponent implements AfterViewInit {

  private dienststellen: string[] = []
  private schiffe: any[] = []

  private klarmeldungen: any[] = []

  private labels: string[] = []
  private parents: string[] = []
  private values: number[] = []
  private colors: string[] = []

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
  }

  ngAfterViewInit(): void {
    this.build()
    this.basicChart()
  }

  build() {
    this.labels.push(...this.dienststellen)
    const rootParents = new Array(this.dienststellen.length).fill('')
    this.values = new Array(this.dienststellen.length).fill(0)
    this.parents.push(...rootParents)

    let tempColor = new Array(this.dienststellen.length + this.schiffe.length).fill('#3495eb')
    this.colors = [...tempColor]
    this.schiffe.forEach((el, index_schiff) => {
      // labels
      this.labels.push(el.name)
      // parents
      this.parents.push(el.dienststelle)
      // value
      const index = this.dienststellen.indexOf(el.dienststelle) // 0
      this.values[index]+=1

      this.klarmeldungen.forEach((klarmeldung: Klarmeldung) => {        
          if (klarmeldung.id_schiff == el.id && klarmeldung.klar == false) {
            this.colors[this.dienststellen.length + index_schiff] = '#ef553b'
          }
      })

      this.values.push(1)
    })
  }

  basicChart() {
    const data: any = [
      {
        type: "sunburst",
        labels: [
          ...this.labels
        ],
        parents: [
          ...this.parents
        ],
        values: [
          ...this.values
        ],
        leaf: {"opacity": 0.4},
        marker: {
          line: {"width": 2},
          colors: [...this.colors]
        },
        branchvalues: 'total',
        hoverinfo: 'none'
      }
    ]

    const layout: any = {
      width: 340,
      height: 340,
      margin: {
        t: 20, 
        l: 0, 
        r: 0, 
        b: 0
      },
      sunburstcolorway:[...this.colors]
    }
    try {
      PlotlyJS.newPlot('klarmeldungen', data, layout)
    } catch (err) {
      // console.log(err)
    }
  }
}
