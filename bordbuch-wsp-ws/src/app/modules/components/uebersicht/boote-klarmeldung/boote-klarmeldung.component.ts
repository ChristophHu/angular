import { Component, OnInit } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min'

@Component({
  selector: 'app-boote-klarmeldung',
  templateUrl: './boote-klarmeldung.component.html',
  styleUrls: ['./boote-klarmeldung.component.sass']
})
export class BooteKlarmeldungComponent implements OnInit {

  // dienststellen[]
  // id            : string
  // bezeichnung   : string
  // position      : Position
  // adresse       : { 
  //   strasse     : string
  //   hausnummer  : string
  //   postleitzahl: string
  //   ort         : string
  // }
  // mailadresse   : string

  // schiffe[]
  // id            : string
  // id_dienststelle?: string
  // name          : string
  // marke         : string
  // typ           : string
  // identifikationsnummer: string
  // dienststelle  : string
  // durchsicht    : string

  // klarmeldungen[]
  // id?         : string
  // id_schiff   : string
  // klar        : boolean
  // beginn       : string
  // ende?       : string

  private dienststellen: string[] = ['WSP Ost', 'WSP Mitte', 'WSP West']
  private schiffe: any[] = [
    { id: '2', name: 'WSP30 Sturmmöve', dienststelle: 'WSP Ost' },
    { id: '4', name: 'WSP31 Albatros', dienststelle: 'WSP Ost' },
    { id: '6', name: 'WSP20 Lietze', dienststelle: 'WSP Mitte' },
    { id: '8', name: 'WSP22 Spree', dienststelle: 'WSP Mitte' },
    { id: '10', name: 'WSP10 Wannsee', dienststelle: 'WSP West' }
  ]
  private klarmeldungen: any[] = [
    { id: '1', id_schiff: '2', klar: false }
  ]

  private labels: string[] = []
  private parents: string[] = []
  private values: number[] = []
  private colors: string[] = ["#3495eb","#3495eb","#3495eb"]

  build() {
    this.labels.push(...this.dienststellen)
    const rootParents = new Array(this.dienststellen.length).fill('')
    this.values = new Array(this.dienststellen.length).fill(0)
    this.parents.push(...rootParents)
    this.schiffe.forEach((el) => {
      // labels
      this.labels.push(el.name)
      // parents
      this.parents.push(el.dienststelle)
      // value
      const index = this.dienststellen.indexOf(el.dienststelle) // 0
      this.values[index]+=1

      let col: boolean = false
      this.klarmeldungen.forEach((klar: any) => {
        if (klar.id_schiff == el.id) col = true
      })
      if (col) {
        this.colors.push('#ef553b')
      } else {
        this.colors.push('#3495eb')
      }
      this.values.push(1)
    })
  }

  ngOnInit(): void {
    this.build()
    this.basicChart()
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
        // labels: [
        //   'WSP Ost', 'WSP Mitte', 'WSP West',
        //   'WSP30 Sturmmöve', 'WSP31 Albatros', 'WSP32 Eisvogel', 'WSP33 Dahme', 'WSP34 Seeschwalbe', 'WSP50 RIB',
        //   'WSP20 Lietze', 'WSP22 Spree', 'WSP23 Seeadler', 'WSP24 Schwanenwerder',
        //   'WSP10 Wannsee', 'WSP11 Mollymauk', 'WSP12 Graureiher', 'WSP14 Pelikan', 'WSP15 Alk', 'WSP16 Kormoran'
        // ],
        // parents: ['', '', '',
        //   'WSP Ost', 'WSP Ost', 'WSP Ost', 'WSP Ost', 'WSP Ost', 'WSP Ost',
        //   'WSP Mitte', 'WSP Mitte', 'WSP Mitte', 'WSP Mitte',
        //   'WSP West', 'WSP West', 'WSP West', 'WSP West', 'WSP West', 'WSP West'
        // ],
        // values: [6, 4, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

        // labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
        // parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
        // values:  [65, 14, 12, 10, 2, 6, 6, 4, 4],

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

    PlotlyJS.newPlot('klarmeldungen', data, layout);
  }
}
